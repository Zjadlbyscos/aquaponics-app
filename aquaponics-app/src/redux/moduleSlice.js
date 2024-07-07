import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const fetchModules = createAsyncThunk('modules/fetchModules', async () => {
  //const response = await axios.get('/modules');
const response = await axios.get(`${API_URL}/modules`);
  return response.data;
});

const modulesSlice = createSlice({
  name: 'modules',
  initialState: {
    modules: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchModules.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchModules.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.modules = action.payload;
      })
      .addCase(fetchModules.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default modulesSlice.reducer;
