// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration **change enviroment variables later?
const firebaseConfig = {
  apiKey: "AIzaSyBnovlKdWuTkFWfG73YHHDq7NT31BxItZU",
  authDomain: "expense-tracker-df435.firebaseapp.com",
  projectId: "expense-tracker-df435",
  storageBucket: "expense-tracker-df435.appspot.com",
  messagingSenderId: "538566357264",
  appId: "1:538566357264:web:e73d239217d8b3f4aab595"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

//firebase login
//firebase init
//firebase deploy