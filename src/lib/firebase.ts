// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  "projectId": "r1-diagnstico-sdr",
  "appId": "1:788748746446:web:352fbc16e22173d089da9f",
  "storageBucket": "r1-diagnstico-sdr.firebasestorage.app",
  "apiKey": "AIzaSyCObIDTTaW2Z9pcFbDT9zrpPs88F5rvjeM",
  "authDomain": "r1-diagnstico-sdr.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "788748746446"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
