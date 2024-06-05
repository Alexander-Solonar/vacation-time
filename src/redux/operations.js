import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';
import { db, storage } from '../firebaseConfig';
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from 'firebase/storage';

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

export const editProfile = createAsyncThunk(
  'userData/editProfile',
  async ({ uid, values }, thunkAPI) => {
    try {
      const ref = doc(db, 'users', uid);

      await updateDoc(ref, values);
      return values;
    } catch (e) {
      console.log(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const changeAvatar = createAsyncThunk(
  'userData/changeAvatar',
  async ({ avatar, uid, preview }, thunkAPI) => {
    const storageRef = ref(storage, `avatars/${avatar.name}`);

    try {
      await uploadBytes(storageRef, avatar);
      const downloadURL = await getDownloadURL(storageRef);
      await updateDoc(doc(db, 'users', uid), {
        avatarURL: downloadURL,
      });
      return preview;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const removeAvatar = createAsyncThunk(
  'userData/removeAvatar',
  async ({ uid }, thunkAPI) => {
    try {
      const userDoc = await getDoc(doc(db, 'users', uid));
      const userData = userDoc.data();
      const avatarURL = userData.avatarURL;
      const fileName = avatarURL.split('%2F').pop().split('?')[0];

      const desertRef = ref(storage, `avatars/${fileName}`);
      await deleteObject(desertRef);
      await updateDoc(doc(db, 'users', uid), {
        avatarURL: null,
      });
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
