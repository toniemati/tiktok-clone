import { initializeApp } from 'firebase/app';
import {getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCkzA2h8_vORnGYt13jyR7I-VesU-1TIH8",
  authDomain: "tiktok-clone-88d5b.firebaseapp.com",
  projectId: "tiktok-clone-88d5b",
  storageBucket: "tiktok-clone-88d5b.appspot.com",
  messagingSenderId: "473298180606",
  appId: "1:473298180606:web:4d1d72ffc09deea529c8af",
  measurementId: "G-B8GD1L4LGE"
};

initializeApp(firebaseConfig);

const db = getFirestore();

export default db;
