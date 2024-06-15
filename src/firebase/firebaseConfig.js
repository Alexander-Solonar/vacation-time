import axios from 'axios';

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { initializeAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAsBbdkbvasgjteL0NgxKBGgSiB3yricpw',
  authDomain: 'vacation-time-a77a5.firebaseapp.com',
  databaseURL: 'https://vacation-time-a77a5-default-rtdb.firebaseio.com/',
  projectId: 'vacation-time-a77a5',
  storageBucket: 'vacation-time-a77a5.appspot.com',
  messagingSenderId: '1029835498636',
  appId: '1:1029835498636:web:01820313339aa4613a07a9',
  measurementId: 'G-H3H1Q3S09R',
};

const databaseURL = firebaseConfig.databaseURL;

export const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export const getHousesCollection = async lng => {
  const response = await axios.get(`${databaseURL}/houses-${lng}.json`);
  return response.data;
};
