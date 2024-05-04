//firebase config
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA28xnNYUlv0xNdU9ohpTNMZiXK9ddrTkI",
  authDomain: "friendandbig2.firebaseapp.com",
  projectId: "friendandbig2",
  storageBucket: "friendandbig2.appspot.com",
  messagingSenderId: "454781441637",
  appId: "1:454781441637:web:b55b50e0fdf38ee0df988c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage();