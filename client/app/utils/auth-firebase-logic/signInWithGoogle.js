import {auth,googleProvider} from "../firebaseConfig"
import { signInWithPopup } from 'firebase/auth';

export const signInWithGoogle = async()=>{
    try {
        const result = await signInWithPopup(auth,googleProvider)
        const user = result.user
        console.log("User signed in",user)
    } catch (error) {
        console.log("Error during sign-in",error)
        
    }
}
