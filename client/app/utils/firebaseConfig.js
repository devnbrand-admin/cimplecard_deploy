import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB9jcbQoFqijp8qs3CfFS8O6im3vccCAwY",
  authDomain: "codebin-angular-learning-fcb12.firebaseapp.com",
  projectId: "codebin-angular-learning-fcb12",
  storageBucket: "codebin-angular-learning-fcb12.appspot.com",
  messagingSenderId: "43459635634",
  appId: "1:43459635634:web:a4ba33fab5fd7eb3409cab"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
