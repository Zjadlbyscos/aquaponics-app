import React from "react";
import { useSelector } from "react-redux";

const CurrentTemperature = ({ moduleId, targetTemperature }) => {
  const currentTemperature = useSelector(
    (state) => state.temperatures.temperatures[moduleId]
  );

  if (currentTemperature === undefined || null) {
    return <span>N/A</span>;
  }

  const isWithinRange = Math.abs(currentTemperature - targetTemperature) <= 0.5;
  const temperatureStyle = {
    color: isWithinRange ? "green" : "red",
  };

  return <span style={temperatureStyle}>{currentTemperature}°C</span>;
};

export default CurrentTemperature;
