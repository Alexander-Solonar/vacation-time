import { createSlice } from '@reduxjs/toolkit';
import { logOut, login, register } from './operations';

const handleRegister = (state, action) => {
  state.uid = action.payload.uid;
  state.isLoggedIn = true;
};

const handleLogin = (state, action) => {
  state.uid = action.payload.uid;
  state.isLoggedIn = true;
};

const handleLogOut = state => {
  state.uid = null;
  state.isLoggedIn = false;
};

const handleRejected = (state, action) => {
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    uid: null,
    isLoggedIn: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, handleRegister)
      .addCase(login.fulfilled, handleLogin)
      .addCase(login.rejected, handleRejected)
      .addCase(logOut.fulfilled, handleLogOut);
  },
});

export const authReducer = authSlice.reducer;
