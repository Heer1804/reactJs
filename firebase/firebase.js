// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDakU6aC1OdFXN6AVmiOND5IoFNXPr5Ols",
  authDomain: "employee-13f81.firebaseapp.com",
  projectId: "employee-13f81",
  storageBucket: "employee-13f81.firebasestorage.app",
  messagingSenderId: "295847522886",
  appId: "1:295847522886:web:5b098919e98c3f07469047"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const getFire = getFirestore(app);