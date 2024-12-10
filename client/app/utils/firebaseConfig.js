import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBuTlSIYxzcEJ2GhNQH5L8ukp4LKq7sIhc",
    authDomain: "loginapp-fd128.firebaseapp.com",
    projectId: "loginapp-fd128",
    storageBucket: "loginapp-fd128.firebasestorage.app",
    messagingSenderId: "607498305145",
    appId: "1:607498305145:web:1e8a7814e7107e86959ea8"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
