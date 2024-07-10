import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchModules } from "../../redux/thunks/module.thunk";
import TemperatureProvider from "../../redux/Temperature/temperatureProvider";

import ModuleListItem from "./ModuleListItem";

import { Modulediv, ModuleElemet } from "./ModuleList.styled";

const ModuleList = () => {
  const dispatch = useDispatch();
  const modules = useSelector((state) => state.modules.modules);

  useEffect(() => {
    dispatch(fetchModules());
  }, [dispatch]);

  return (
    <TemperatureProvider>
      <Modulediv>
        <ModuleElemet>
          {modules.map((module) => (
            <ModuleListItem key={module.id} module={module} />
          ))}
        </ModuleElemet>
      </Modulediv>
    </TemperatureProvider>
  );
};

export default ModuleList;
