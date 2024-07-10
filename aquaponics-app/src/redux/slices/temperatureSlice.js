import { createSlice } from "@reduxjs/toolkit";
import socket from "../../utils/socket";

const initialState = {
  temperatures: {},
};

const temperatureSlice = createSlice({
  name: "temperatures",
  initialState,
  reducers: {
    updateTemperature: (state, action) => {
      const { id, temperature } = action.payload;
      state.temperatures[id] = temperature;
    },
  },
});

export const { updateTemperature } = temperatureSlice.actions;

export const initializeSocket = () => (dispatch) => {
  socket.on("connect", () => {
    console.log("Connected to WebSocket server");
  });

  socket.on("moduleUpdate", (data) => {
    data.forEach((module) => {
      dispatch(updateTemperature(module));
    });
  });

  socket.on("disconnect", () => {
    console.log("Disconnected from WebSocket server");
  });

  return () => {
    socket.off("moduleUpdate");
  };
};

export const temperaturesReducer = temperatureSlice.reducer;
