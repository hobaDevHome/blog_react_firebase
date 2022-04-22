// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB9S_jx2OBBqMrmLrKR_Kq5Z1UE4e-Mr9s',
  authDomain: 'blog-4b2e2.firebaseapp.com',
  projectId: 'blog-4b2e2',
  storageBucket: 'blog-4b2e2.appspot.com',
  messagingSenderId: '1041794126308',
  appId: '1:1041794126308:web:ff9f3485cabc4f87c137f1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
