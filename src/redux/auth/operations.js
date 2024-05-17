import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth, db } from '../../config';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { doc, setDoc } from 'firebase/firestore';

export const register = createAsyncThunk(
  'auth/register',
  async ({ email, password, name }, thunkAPI) => {
    const userData = {
      name: name,
      gender: '',
      age: '',
      phone: '',
      email: email,
    };

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const docRef = doc(db, 'users', user.uid);
      await setDoc(docRef, userData);

      const data = {
        email: user.email,
        token: user.accessToken,
        uid: user.uid,
      };
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      const data = {
        displayName: user.displayName,
        email: user.email,
        token: user.accessToken,
        uid: user.uid,
      };

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await auth.signOut();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
