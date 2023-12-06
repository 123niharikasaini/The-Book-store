// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: "the-book-store-86c49.firebaseapp.com",
  projectId: "the-book-store-86c49",
  storageBucket: "the-book-store-86c49.appspot.com",
  messagingSenderId: "1066841009301",
  appId: "1:1066841009301:web:f98a2fb8b130eb8d5c7f9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;