import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCrm9q9JnX6ObneWvuoJiNQyqsR4Wmnfwo",
  authDomain: "ariel-crypto.firebaseapp.com",
  projectId: "ariel-crypto",
  storageBucket: "ariel-crypto.appspot.com",
  messagingSenderId: "454101399249",
  appId: "1:454101399249:web:43dfce9a1f3a49b1ad37f0"
};

export const app = initializeApp(firebaseConfig);