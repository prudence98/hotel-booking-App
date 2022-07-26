import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

import {getFirestore} from 'firebase/firestore'
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCLWIeCeCiBSZ90-Mrr44hzYPubbM6HJEk",
  authDomain: "hotel-28ba5.firebaseapp.com",
  projectId: "hotel-28ba5",
  storageBucket: "hotel-28ba5.appspot.com",
  messagingSenderId: "662117239754",
  appId: "1:662117239754:web:4ca11d6771620dcbc51d33",
  measurementId: "G-K04G9JY5SK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db =getFirestore(app)
const analytics = getAnalytics(app);
const auth=getAuth(app);
const storage = getStorage(app);

export {auth, db, storage};