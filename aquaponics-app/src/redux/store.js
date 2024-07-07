import { configureStore } from "@reduxjs/toolkit";
import { modulesReducer } from "./moduleSlice";
export const store = configureStore({
  reducer: {
    modules: modulesReducer,
  },
});
