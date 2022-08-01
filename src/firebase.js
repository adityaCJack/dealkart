// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXP7r9i2exug-jp5tRsj5bHniMU6wkKJs",
  authDomain: "dealkart-9ca4c.firebaseapp.com",
  projectId: "dealkart-9ca4c",
  storageBucket: "dealkart-9ca4c.appspot.com",
  messagingSenderId: "42500064493",
  appId: "1:42500064493:web:ef6ad9a3e1282735f4f8e4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
