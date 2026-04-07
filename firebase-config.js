import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

// Replace with your Firebase project configuration from:
// Firebase Console -> Project settings -> Your apps -> SDK setup and configuration.
const firebaseConfig = {
  apiKey: "AIzaSyDdz93UUkAcKGUYXuKkxj5bXaxUPhuvQZM",
  authDomain: "temanrusiakamu-7ee39.firebaseapp.com",
  projectId: "temanrusiakamu-7ee39",
  storageBucket: "temanrusiakamu-7ee39.firebasestorage.app",
  messagingSenderId: "1034423527829",
  appId: "1:1034423527829:web:4ac1aab4e29690a520ae9c",
  measurementId: "G-VQLJFGGWG4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
