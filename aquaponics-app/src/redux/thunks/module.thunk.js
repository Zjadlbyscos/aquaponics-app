import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";

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
    const response = await axios.patch(`/modules/${id}`, updatedData);
    return response.data;
  }
);