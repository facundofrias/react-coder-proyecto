// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2rakJraHUznHBAg_QJ2qL9_aZHyh7--k",
  authDomain: "ecommerece-coder.firebaseapp.com",
  projectId: "ecommerece-coder",
  storageBucket: "ecommerece-coder.appspot.com",
  messagingSenderId: "927813134782",
  appId: "1:927813134782:web:a1fa42a5ba72da9926f1ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);