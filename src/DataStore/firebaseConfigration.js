import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBbLWJcC7R8dua9zlrKVfSerKYh_k6Kvl0",
  authDomain: "authsystem-55d39.firebaseapp.com",
  projectId: "authsystem-55d39",
  storageBucket: "authsystem-55d39.appspot.com",
  messagingSenderId: "227958829327",
  appId: "1:227958829327:web:f4d6167c988e383b77ce7a",
  measurementId: "G-ZMF24TDKMF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
