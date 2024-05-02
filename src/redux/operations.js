import { createAsyncThunk } from '@reduxjs/toolkit';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config';

export const fetchUserData = createAsyncThunk(
  'userData/fetchAll',
  async (docId, thunkAPI) => {
    try {
      const response = await getDocs(collection(db, 'users'));
      if (!response.empty) {
        const arrayData = response.docs.filter(doc => doc.id === docId);
        const posts = arrayData[0].data();

        return posts;
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
