import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001";

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
    const response = await axios.get(`${API_URL}//modules/${id}`);
    return response.data;
  }
);

const modulesSlice = createSlice({
  name: "modules",
  initialState: {
    modules: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchModules.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchModules.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.modules = action.payload;
      })
      .addCase(fetchModules.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchModuleById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchModuleById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.selectedModule = action.payload;
      })
      .addCase(fetchModuleById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export const modulesReducer = modulesSlice.reducer;
export default modulesSlice.reducer;
