import React from "react";
import { Link } from "react-router-dom";

import CurrentTemperature from "../CurrentTemperature/CurrentTemperature";

import { ListWrapper } from "./ModuleList.styled";

const ModuleListItem = ({ module }) => {
  return (
    <li>
      <Link to={`/modules/${module.id}`}>
        <ListWrapper>
          <h2>{module.name}</h2>
          <p>Available: {module.available ? "Yes" : "No"}</p>
        </ListWrapper>

        <ListWrapper>
          <p> Target Temperature : {module.targetTemperature}°C</p>
          <p>Current Temperature:{" "}
            <CurrentTemperature
              moduleId={module.id}
              targetTemperature={module.targetTemperature}
            />
          </p>
        </ListWrapper>
      </Link>
    </li>
  );
};

export default ModuleListItem;
