// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getDatabase} from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBR9EYJ7rKBsrRCLc4O2IrK-QTlYuGCEks",
  authDomain: "shopme-725c7.firebaseapp.com",
  projectId: "shopme-725c7",
  storageBucket: "shopme-725c7.appspot.com",
  messagingSenderId: "128936964583",
  appId: "1:128936964583:web:d62e9917100633adfd8d42"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export const auth=getAuth(firebase);
export const database=getDatabase(firebase);

export default firebase;
