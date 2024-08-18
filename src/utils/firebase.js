// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZ6JI2pUYO0gf-Mfr2WXIFwTS0eXdVfhI",
  authDomain: "netflixgpt-2b6e0.firebaseapp.com",
  projectId: "netflixgpt-2b6e0",
  storageBucket: "netflixgpt-2b6e0.appspot.com",
  messagingSenderId: "481534904987",
  appId: "1:481534904987:web:17f2ee31ad63a17e9e143e",
  measurementId: "G-Y9JGMH1JF5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
