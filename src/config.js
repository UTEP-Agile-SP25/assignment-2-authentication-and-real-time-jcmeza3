// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFeGP46zMmOnsBJghdqlPTgdicEiyYZk8",
  authDomain: "mezasandbox.firebaseapp.com",
  projectId: "mezasandbox",
  storageBucket: "mezasandbox.firebasestorage.app",
  messagingSenderId: "684057162625",
  appId: "1:684057162625:web:329b2754c12e833ceb2e80",
  measurementId: "G-T4VZ2NWQTW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore(app)
export default app