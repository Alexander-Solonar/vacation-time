import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { auth, db } from '../../firebaseConfig';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { doc, setDoc } from 'firebase/firestore';

const setUserDocument = async (user, userData) => {
  const docRef = doc(db, 'users', user.uid);
  await setDoc(docRef, userData);
};

export const register = createAsyncThunk(
  'auth/register',
  async ({ email, password, name }, thunkAPI) => {
    const userData = {
      name,
      gender: '',
      age: '',
      phone: '',
      email,
      avatarURL: '',
    };
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await setUserDocument(user, userData);
      return { uid: user.uid };
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
      return { uid: user.uid };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await signOut(auth);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
