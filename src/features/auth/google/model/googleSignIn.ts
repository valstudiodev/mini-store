import { signInWithPopup, UserCredential } from "firebase/auth";
import { auth, googleProvider } from "@/shared/config/firebase/firebase-config";

export async function googleSignIn(): Promise<UserCredential> {

  const result = await signInWithPopup(auth, googleProvider)

  return result
}