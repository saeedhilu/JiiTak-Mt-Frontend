import { createSlice } from '@reduxjs/toolkit';
import UserRouts from "@/routes/UserRoutes"

const initialState = {
  accessToken: null,
  refreshToken: null,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const { access, refresh, user } = action.payload;
      state.accessToken = access;
      state.refreshToken = refresh;
      state.user = user;
    },
    logout: (state) => {
      
      state.accessToken = null;
      state.refreshToken = null;
      state.user = null;
    },
    updateToken: (state, action) => {
      state.accessToken = action.payload.accessToken;
    },
    clearAuth: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
      state.user = null;
    },
  },
});

export const { login, logout, updateToken, clearAuth } = authSlice.actions;

export default authSlice.reducer;