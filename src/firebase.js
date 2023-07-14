// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDr0tr-sxw8WrQylMyuWeXiyZUHFSHEJkc",
  authDomain: "medium-clone-7f2fa.firebaseapp.com",
  projectId: "medium-clone-7f2fa",
  storageBucket: "medium-clone-7f2fa.appspot.com",
  messagingSenderId: "387913541191",
  appId: "1:387913541191:web:e93e0529f60e60c97df362",
  measurementId: "G-456M20452F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
