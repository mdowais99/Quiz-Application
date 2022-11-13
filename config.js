import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, initializeFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDv-zUtXwNbDHrYYJgqwUt0OX_8KsgRQMo",
  authDomain: "quiz-app-9dcc1.firebaseapp.com",
  projectId: "quiz-app-9dcc1",
  storageBucket: "quiz-app-9dcc1.appspot.com",
  messagingSenderId: "871432771868",
  appId: "1:871432771868:web:ad7d2ace85ce5c843b82d9",
  measurementId: "G-H719NNNHZE"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = initializeFirestore(app, {})