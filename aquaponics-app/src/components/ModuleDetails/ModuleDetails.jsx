import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';
import { fetchModuleById } from '../../redux/moduleSlice';

const ModuleDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const module = useSelector((state) => state.modules.selectedModule);
    const isLoading = useSelector((state) => state.modules.isLoading);
    const hasSucceeded = useSelector((state) => state.modules.hasSucceeded);
    const error = useSelector((state) => state.modules.error);
  
    useEffect(() => {
      dispatch(fetchModuleById(id));
    }, [dispatch, id]);
  
    let content;
  
    if (isLoading) {
      content = <p>Loading...</p>;
    } else if (hasSucceeded && module) {
      content = (
        <div>
          <h2>{module.name}</h2>
          <p>{module.description}</p>
          <p>Available: {module.available ? 'Yes' : 'No'}</p>
          <p>Target Temperature: {module.targetTemperature}°C</p>
          {module.available ? (
            <button>Edit Module</button>
          ) : (
            <p>This module is not available for editing.</p>
          )}
          <NavLink to="/">Back to Module List</NavLink>
        </div>
      );
    } else if (error) {
      content = <p>{error}</p>;
    }
  
    return (
      <div>
        <h1>Module Details</h1>
        {content}
      </div>
    );
  };
  
  export default ModuleDetails;