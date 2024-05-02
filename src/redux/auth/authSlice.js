import { createSlice } from '@reduxjs/toolkit';
import { logOut, login, register } from './operations';

const initialState = {
  displayName: null,
  email: null,
  token: null,
  uid: null,
  isLoggedIn: false,
  isRefreshing: false,
};

// const handleRefresh = (state, action) => {
//   state.user = { ...action.payload };
//   state.isLoggedIn = true;
//   state.isRefreshing = false;
// };

// const handleIsRefreshing = state => {
//   state.isRefreshing = true;
// };

// const handleIsNotRefreshing = state => {
//   state.isRefreshing = false;
// };

const handleRegister = (state, action) => {
  state.email = action.payload.email;
  state.uid = action.payload.uid;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const handleLogin = (state, action) => {
  state.displayName = action.payload.displayName;
  state.email = action.payload.email;
  state.uid = action.payload.uid;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const handleLogOut = state => {
  state.displayName = null;
  state.email = null;
  state.token = null;
  state.uid = null;
  state.isLoggedIn = true;
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
