// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC-MXM30zgyDisifR58bKXOdgaYYbt3dCQ",
  authDomain: "institute-crud.firebaseapp.com",
  projectId: "institute-crud",
  storageBucket: "institute-crud.appspot.com",
  messagingSenderId: "575401453623",
  appId: "1:575401453623:web:04410bf1346527d01137b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };