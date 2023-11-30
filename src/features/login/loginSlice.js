// src/features/login/loginSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    token: null,
    userName: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload.token;
      state.userName = action.payload.userName;
    },
  },
});

export const { loginSuccess } = loginSlice.actions;

export default loginSlice.reducer;
