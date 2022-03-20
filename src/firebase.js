// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCb5LQbRXJ0iyXz0LzkA4BX-X65g4SoKVg",
  authDomain: "fortewaves-12870.firebaseapp.com",
  databaseURL: "https://fortewaves-12870-default-rtdb.firebaseio.com",
  projectId: "fortewaves-12870",
  storageBucket: "fortewaves-12870.appspot.com",
  messagingSenderId: "167438117994",
  appId: "1:167438117994:web:fe40e46c787ec8da5f6e13",
  measurementId: "G-RS5SNC71ZK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app