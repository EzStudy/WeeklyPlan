// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQjnIof_kS43iMOU4bmmKgRT4tFwdg9Ns",
  authDomain: "weeklyplan-7486e.firebaseapp.com",
  projectId: "weeklyplan-7486e",
  storageBucket: "weeklyplan-7486e.appspot.com",
  messagingSenderId: "396862528565",
  appId: "1:396862528565:web:ceddd2a2fc436e2b09657c",
  measurementId: "G-NC7V8P7MM7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getFirestore(app);

export {db};