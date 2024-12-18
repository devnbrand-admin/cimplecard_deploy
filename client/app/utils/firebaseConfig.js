import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDlqjcSJXemglhW6gKwFc29We4mc1QKfUc",
    authDomain: "cimplecard.firebaseapp.com",
    projectId: "cimplecard",
    storageBucket: "cimplecard.firebasestorage.app",
    messagingSenderId: "158931492347",
    appId: "1:158931492347:web:6b057868605e56e7e33f5e"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
