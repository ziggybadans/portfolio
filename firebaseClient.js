// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDt9i7Tw6IKbIrasVcuVXNZSwwhXn8N5p0",
  authDomain: "ziggy-badans.firebaseapp.com",
  projectId: "ziggy-badans",
  storageBucket: "ziggy-badans.appspot.com",
  messagingSenderId: "43611547136",
  appId: "1:43611547136:web:85123b059dd91c8e591ae5",
  measurementId: "G-J5FMCW85DC",
};

// Sign up
export const signUp = async ({ auth, email, password }) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const logIn = async ({ auth, email, password }) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Get a reference to the auth service
export const auth = getAuth(app);