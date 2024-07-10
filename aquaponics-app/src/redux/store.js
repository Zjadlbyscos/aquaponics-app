import { configureStore } from "@reduxjs/toolkit";
import { modulesReducer } from "./slices/moduleSlice";
import { temperaturesReducer } from "./slices/temperatureSlice";

export const store = configureStore({
  reducer: {
    modules: modulesReducer,
    temperatures: temperaturesReducer,
  },
});
