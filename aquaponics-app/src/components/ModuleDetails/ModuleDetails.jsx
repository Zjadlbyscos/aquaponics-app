import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';
import { fetchModuleById,updateModule } from '../../redux/moduleSlice';

const ModuleDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const module = useSelector((state) => state.modules.selectedModule);
  const isLoading = useSelector((state) => state.modules.isLoading);
  const hasSucceeded = useSelector((state) => state.modules.hasSucceeded);
  const error = useSelector((state) => state.modules.error);

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    targetTemperature: '',
  });

  useEffect(() => {
    if (id) {
      dispatch(fetchModuleById(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (module) {
      setFormData({
        name: module.name,
        description: module.description,
        targetTemperature: module.targetTemperature,
      });
    }
  }, [module]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.description && formData.targetTemperature >= 0 && formData.targetTemperature <= 40) {
      dispatch(updateModule({ id, updates: formData }));
      setIsEditing(false);
    } else {
      alert('Please fill out all fields correctly.');
    }
  };

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
          <>
            <button onClick={handleEditClick}>Edit Module</button>
            {isEditing && (
              <form onSubmit={handleFormSubmit}>
                <label>
                  Name:
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                  />
                </label>
                <label>
                  Description:
                  <input
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleFormChange}
                  />
                </label>
                <label>
                  Target Temperature:
                  <input
                    type="number"
                    name="targetTemperature"
                    value={formData.targetTemperature}
                    onChange={handleFormChange}
                  />
                </label>
                <button type="submit">Save</button>
              </form>
            )}
          </>
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