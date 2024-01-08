// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtWFdeehOxnAValhVZ1ruDxie9vkLRLLE",
  authDomain: "my-contact-304a5.firebaseapp.com",
  projectId: "my-contact-304a5",
  storageBucket: "my-contact-304a5.appspot.com",
  messagingSenderId: "703686552181",
  appId: "1:703686552181:web:7696f9e38b86b10207a63c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);