import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3001'

export const fetchModules = createAsyncThunk(
  "modules/fetchModules",
  async () => {
    const response = await axios.get("/modules");
    return response.data;
  }
);

export const fetchModuleDetails = createAsyncThunk(
  "modules/fetchModuleDetails",
  async (id) => {
    const response = await axios.get(`/modules/${id}`);
    return response.data;
  }
);

export const updateModule = createAsyncThunk(
  "modules/updateModule",
  async ({ id, updatedData }) => {
    const response = await axios.patch(
      `/modules/${id}`,
      updatedData
    );
    return response.data;
  }
);

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
