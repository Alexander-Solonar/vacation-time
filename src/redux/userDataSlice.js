import { createSlice } from '@reduxjs/toolkit';
import {
  changeAvatar,
  editProfile,
  fetchUserData,
  removeAvatar,
} from './operations';

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = false;
};

const handleRejected = (state, action) => {
  state.isLoading = true;
  state.error = action.payload;
};
const handleFulfilledFetch = (state, action) => {
  state.user = action.payload;
  state.isLoading = true;
  state.error = null;
};

const handleFulfilledEditProfile = (state, action) => {
  state.user = action.payload;
  state.isLoading = true;
  state.error = null;
};
const handleFulfilledChangeAvatar = (state, action) => {
  state.user.avatarURL = action.payload;
  state.isLoading = true;
  state.error = null;
};

const handleFulfilledRemoveAvatar = state => {
  state.user.avatarURL = null;
  state.isLoading = true;
  state.error = null;
};

const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchUserData.pending, handlePending)
      .addCase(fetchUserData.fulfilled, handleFulfilledFetch)
      .addCase(fetchUserData.rejected, handleRejected)
      .addCase(editProfile.pending, handlePending)
      .addCase(editProfile.fulfilled, handleFulfilledEditProfile)
      .addCase(editProfile.rejected, handleRejected)
      .addCase(changeAvatar.pending, handlePending)
      .addCase(changeAvatar.fulfilled, handleFulfilledChangeAvatar)
      .addCase(changeAvatar.rejected, handleRejected)
      .addCase(removeAvatar.pending, handlePending)
      .addCase(removeAvatar.fulfilled, handleFulfilledRemoveAvatar)
      .addCase(removeAvatar.rejected, handleRejected);
  },
});

export const userDataReducer = userDataSlice.reducer;
