// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyDqBaLtVwwq9DNUf0HZ__KulaNIgoKZ-as",
  authDomain: "fir-course-12c4f.firebaseapp.com",
  projectId: "fir-course-12c4f",
  storageBucket: "fir-course-12c4f.appspot.com",
  messagingSenderId: "395401043216",
  appId: "1:395401043216:web:021edd346ce0418fcad995",
  measurementId: "G-CDV0R4P1JK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const firestoreDb = getFirestore(app);
export const storage = getStorage(app);