import { createSlice } from "@reduxjs/toolkit";
import {
  fetchModules,
  fetchModuleDetails,
  updateModule,
} from "../thunks/module.thunk";

const modulesSlice = createSlice({
  name: "modules",
  initialState: {
    modules: [],
    module: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchModules.fulfilled, (state, action) => {
        state.modules = action.payload;
      })
      .addCase(fetchModuleDetails.fulfilled, (state, action) => {
        state.module = action.payload;
      })
      .addCase(updateModule.fulfilled, (state, action) => {
        state.module = action.payload;
      });
  },
});

export default modulesSlice.reducer;
export const modulesReducer = modulesSlice.reducer;
