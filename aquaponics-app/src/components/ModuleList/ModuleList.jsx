import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchModules } from "../../redux/moduleSlice";
import ModuleListItem from "./ModuleListItem";
import socket from "../../utils/socket";

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
    <div>
      <h1>Module List</h1>
      <ul>
        {modules.map((module) => (
          <ModuleListItem
            key={module.id}
            module={module}
            currentTemperature={currentTemperatures[module.id]}
          />
        ))}
      </ul>
    </div>
  );
};

export default ModuleList;
