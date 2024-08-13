
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDhGZgjdHx9j6XwfZQfxqmJq4C1DwQIS4Y",
  authDomain: "revisao-agosto.firebaseapp.com",
  projectId: "revisao-agosto",
  storageBucket: "revisao-agosto.appspot.com",
  messagingSenderId: "668911798786",
  appId: "1:668911798786:web:5cb60a74157f1422a3b51b",
  measurementId: "G-173CG9NYVP"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth (app);