import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchModules } from '../redux/moduleSlice';

const ModuleList = () => {
  const dispatch = useDispatch();
  const modules = useSelector((state) => state.modules.modules);
  const moduleStatus = useSelector((state) => state.modules.status);
  const error = useSelector((state) => state.modules.error);

  useEffect(() => {
    if (moduleStatus === 'idle') {
      dispatch(fetchModules());
    }
  }, [moduleStatus, dispatch]);

  let content;

  if (moduleStatus === 'loading') {
    content = <p>Loading...</p>;
  } else if (moduleStatus === 'succeeded') {
    content = modules.map((module) => (
      <div key={module.id}>
        <h2>{module.name}</h2>
        <p>Available: {module.available ? 'Yes' : 'No'}</p>
        <p>Target Temperature: {module.targetTemperature}°C</p>
      </div>
    ));
  } else if (moduleStatus === 'failed') {
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
