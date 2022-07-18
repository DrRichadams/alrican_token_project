// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAW5MhD7Pfgkt86qZP1T8lrte9ixfByrTI",
  authDomain: "acm-crypto.firebaseapp.com",
  projectId: "acm-crypto",
  storageBucket: "acm-crypto.appspot.com",
  messagingSenderId: "353107992281",
  appId: "1:353107992281:web:6f66a48efc332042a8e8c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;