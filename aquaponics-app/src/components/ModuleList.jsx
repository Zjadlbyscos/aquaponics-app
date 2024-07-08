import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchModules, updateTemperature } from '../redux/moduleSlice';
import { NavLink } from 'react-router-dom';
import socket from '../utils/socket';

const ModuleList = () => {
  const dispatch = useDispatch();
  const modules = useSelector((state) => state.modules.modules);
  const isLoading = useSelector((state) => state.modules.isLoading);
  const hasSucceeded = useSelector((state) => state.modules.hasSucceeded);
  const error = useSelector((state) => state.modules.error);

  useEffect(() => {
    if (!hasSucceeded && !isLoading) {
      dispatch(fetchModules());
    }
  }, [hasSucceeded, isLoading, dispatch]);

  useEffect(() => {
    socket.on('temperatureUpdate', (data) => {
      dispatch(updateTemperature(data));
    });

    socket.on('connect_error', (err) => {
      console.error('Connection Error: ', err.message);
    });

    return () => {
      socket.disconnect();
    };
  }, [dispatch]);

  let content;

  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (hasSucceeded) {
    content = modules.map((module) => (
      <div key={module.id}>
        <h2>{module.name}</h2>
        <p>Available: {module.available ? 'Yes' : 'No'}</p>
        <p>Target Temperature: {module.targetTemperature}°C</p>
        <p
          style={{
            color:
              module.currentTemperature >= module.targetTemperature - 0.5 &&
              module.currentTemperature <= module.targetTemperature + 0.5
                ? 'green'
                : 'red',
          }}
        >
          Current Temperature: {module.currentTemperature || 'N/A'}°C
        </p>
        <NavLink to={`/modules/${module.id}`}>View Details</NavLink>
      </div>
    ));
  } else if (error) {
    content = <p>{error}</p>;
  }

  return (
    <div>
      <h1>Module List</h1>
      {content}
    </div>
  );
};

export default ModuleList;