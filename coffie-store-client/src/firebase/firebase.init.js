// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1OqlaAAOIQDG-_oUmilbUUgEYgaf2yKk",
  authDomain: "coffee-store-64698.firebaseapp.com",
  projectId: "coffee-store-64698",
  storageBucket: "coffee-store-64698.firebasestorage.app",
  messagingSenderId: "779461730879",
  appId: "1:779461730879:web:269c5564431fbdb2b00e8a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;