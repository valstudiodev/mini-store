import { signInWithEmailAndPassword, UserCredential } from "firebase/auth";
import { auth } from "@/shared/config/firebase/firebase-config";

export async function login(email: string, password: string): Promise<UserCredential> {
  return signInWithEmailAndPassword(auth, email, password)
}