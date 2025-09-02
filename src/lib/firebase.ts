// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

export { app };
