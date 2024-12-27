import { auth, googleProvider } from "../firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    console.log("User signed in", user);
    router.push(`/Dashboard/2`);
  } catch (error) {
    console.log("Error during sign-in", error);
  }
};
