import React from "react";
import { Link } from "react-router-dom";
import { ListWrapper } from "./ModuleList.styled";
const ModuleListItem = ({ module, currentTemperature }) => {
  const isInTargetRange =
    currentTemperature &&
    currentTemperature >= module.targetTemperature - 0.5 &&
    currentTemperature <= module.targetTemperature + 0.5;

  return (
    <li>
      <Link to={`/modules/${module.id}`}>
        <ListWrapper>

        <h2>{module.name}</h2>
        <p>Available: {module.available ? "Yes" : "No"}</p>
        </ListWrapper>
        
        <ListWrapper>

        <p>Target Temperature: {module.targetTemperature}°C</p>
        <p style={{ color: isInTargetRange ? "green" : "red" }}>
          Current Temperature: {currentTemperature ?? "N/A"}°C
        </p>
        </ListWrapper>
      
      </Link>
    </li>
  );
};

export default ModuleListItem;
