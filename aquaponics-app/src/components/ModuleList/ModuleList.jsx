import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchModules } from "../../redux/moduleSlice";
import ModuleListItem from "./ModuleListItem";
import socket from "../../utils/socket";

import { Modulediv, ModuleElemet } from "./ModuleList.styled";

const ModuleList = () => {
  const dispatch = useDispatch();
  const modules = useSelector((state) => state.modules.modules);
  const [currentTemperatures, setCurrentTemperatures] = useState({});

  useEffect(() => {
    dispatch(fetchModules());

    socket.on("temperatureUpdate", (data) => {
      setCurrentTemperatures((prevTemps) => ({
        ...prevTemps,
        [data.id]: data.temperature,
      }));
    });

    return () => {
      socket.off("temperatureUpdate");
    };
  }, [dispatch]);

  return (
    <Modulediv>
      <h1>Module List</h1>
      <ModuleElemet>
        {modules.map((module) => (
          <ModuleListItem
            key={module.id}
            module={module}
            currentTemperature={currentTemperatures[module.id]}
          />
        ))}
      </ModuleElemet>
    </Modulediv>
  );
};

export default ModuleList;
