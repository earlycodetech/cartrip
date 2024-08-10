import { initializeApp,getApp,getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "cartrip-7ab03.firebaseapp.com",
  projectId: "cartrip-7ab03",
  storageBucket: "cartrip-7ab03.appspot.com",
  messagingSenderId: "456995986284",
  appId: "1:456995986284:web:d318b7891048b02c577149"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db }