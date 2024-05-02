import { createSlice } from '@reduxjs/toolkit';
import { fetchUserData } from './operations';

const initialState = {
  items: [],
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
  state.isLoading = true;
  state.error = null;
  state.items = action.payload || [];
};

const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchUserData.pending, handlePending)
      .addCase(fetchUserData.fulfilled, handleFulfilledFetch)
      .addCase(fetchUserData.rejected, handleRejected);
  },
});

export const userDataReducer = userDataSlice.reducer;
