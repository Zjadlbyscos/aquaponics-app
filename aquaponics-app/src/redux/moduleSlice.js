import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL 
|| "http://localhost:3001";

export const fetchModules = createAsyncThunk(
  "modules/fetchModules",
  async () => {
    const response = await axios.get(`${API_URL}/modules`);
    return response.data;
  }
);
export const fetchModuleById = createAsyncThunk(
  "modules/fetchModuleById",
  async (id) => {
    const response = await axios.get(`${API_URL}/modules/${id}`);
    return response.data;
  }
);

export const updateModule = createAsyncThunk('modules/updateModule', async ({ id, updates }) => {
  const response = await axios.patch(`${API_URL}/modules/${id}`, updates);
  return response.data;
});

const modulesSlice = createSlice({
  name: "modules",
  initialState: {
    modules: [],
    selectedModule: null,
    isLoading: false,
    hasSucceeded: false,
    hasFailed: false,
    error: null,
  },
  reducers: { updateTemperature(state, action) {
    const { id, temperature } = action.payload;
    const module = state.modules.find((mod) => mod.id === id);
    if (module) {
      module.currentTemperature = temperature;
    }
    if (state.selectedModule && state.selectedModule.id === id) {
      state.selectedModule.currentTemperature = temperature;
    }
  },
},
  extraReducers: (builder) => {
    builder
    .addCase(fetchModules.pending, (state) => {
      state.isLoading = true;
      state.hasSucceeded = false;
      state.hasFailed = false;
    })
    .addCase(fetchModules.fulfilled, (state, action) => {
      state.isLoading = false;
      state.hasSucceeded = true;
      state.modules = action.payload;
    })
    .addCase(fetchModules.rejected, (state, action) => {
      state.isLoading = false;
      state.hasFailed = true;
      state.error = action.error.message;
    })
    .addCase(fetchModuleById.pending, (state) => {
      state.isLoading = true;
      state.hasSucceeded = false;
      state.hasFailed = false;
    })
    .addCase(fetchModuleById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.hasSucceeded = true;
      state.selectedModule = action.payload;
    })
    .addCase(fetchModuleById.rejected, (state, action) => {
      state.isLoading = false;
      state.hasFailed = true;
      state.error = action.error.message;
    })
    .addCase(updateModule.pending, (state) => {
      state.isLoading = true;
      state.hasSucceeded = false;
      state.hasFailed = false;
    })
    .addCase(updateModule.fulfilled, (state, action) => {
      state.isLoading = false;
      state.hasSucceeded = true;
      state.selectedModule = action.payload;
    })
    .addCase(updateModule.rejected, (state, action) => {
      state.isLoading = false;
      state.hasFailed = true;
      state.error = action.error.message;
    });
},
});
export const { updateTemperature } = modulesSlice.actions;
export const modulesReducer = modulesSlice.reducer;
export default modulesSlice.reducer;
