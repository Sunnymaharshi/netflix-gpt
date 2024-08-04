// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const API_KEY = process.env.REACT_APP_FIREBASE_API_KEY
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "netflixgpt-8a66b.firebaseapp.com",
  projectId: "netflixgpt-8a66b",
  storageBucket: "netflixgpt-8a66b.appspot.com",
  messagingSenderId: "800171878123",
  appId: "1:800171878123:web:2aa0150829483f202a00ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();