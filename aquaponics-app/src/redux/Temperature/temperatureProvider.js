import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initializeSocket } from "../slices/temperatureSlice";

const TemperatureProvider = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const cleanup = dispatch(initializeSocket());

    return () => cleanup();
  }, [dispatch]);

  return children;
};

export default TemperatureProvider;
