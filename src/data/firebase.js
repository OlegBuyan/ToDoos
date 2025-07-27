import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBbIc3PObjcI5vCfTD_Ww0Sefg9J_R2KKE",
  authDomain: "resaulthw.firebaseapp.com",
  databaseURL:
    "https://resaulthw-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "resaulthw",
  storageBucket: "resaulthw.firebasestorage.app",
  messagingSenderId: "922223466889",
  appId: "1:922223466889:web:7d6b83afc268fd7e702958",
  databaseURL:
    "https://resaulthw-default-rtdb.europe-west1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
