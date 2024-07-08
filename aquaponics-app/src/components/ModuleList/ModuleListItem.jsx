import React from "react";
import { Link } from "react-router-dom";

const ModuleListItem = ({ module, currentTemperature }) => {
  const isInTargetRange =
    currentTemperature &&
    currentTemperature >= module.targetTemperature - 0.5 &&
    currentTemperature <= module.targetTemperature + 0.5;

  return (
    <li>
      <Link to={`/modules/${module.id}`}>
        <h2>{module.name}</h2>
        <p>Available: {module.available ? "Yes" : "No"}</p>
        <p>Target Temperature: {module.targetTemperature}°C</p>
        <p style={{ color: isInTargetRange ? "green" : "red" }}>
          Current Temperature: {currentTemperature ?? "N/A"}°C
        </p>
      </Link>
    </li>
  );
};

export default ModuleListItem;
