import { createSlice } from '@reduxjs/toolkit';
import { logOut, login, register } from './operations';

const initialState = {
  displayName: null,
  email: null,
  uid: null,
  isLoggedIn: false,
};

const handleRegister = (state, action) => {
  state.email = action.payload.email;
  state.uid = action.payload.uid;
  state.isLoggedIn = true;
};

const handleLogin = (state, action) => {
  state.displayName = action.payload.displayName;
  state.email = action.payload.email;
  state.uid = action.payload.uid;
  state.isLoggedIn = true;
};

const handleLogOut = state => {
  state.displayName = null;
  state.email = null;
  state.uid = null;
  state.isLoggedIn = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder

      .addCase(register.fulfilled, handleRegister)
      .addCase(login.fulfilled, handleLogin)
      .addCase(logOut.fulfilled, handleLogOut);
  },
});

export const authReducer = authSlice.reducer;
