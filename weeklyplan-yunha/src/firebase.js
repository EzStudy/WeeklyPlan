// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB9eiSGAoxt0cq4bpy9gkDD3ijWuOVPb4M",
    authDomain: "weeklyplan-react.firebaseapp.com",
    projectId: "weeklyplan-react",
    storageBucket: "weeklyplan-react.appspot.com",
    messagingSenderId: "1027932075094",
    appId: "1:1027932075094:web:8b8820776b313e6fe477f7",
    measurementId: "G-E12647H68Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getFirestore(app);
export {db};
