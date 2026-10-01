import { UserCredential } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/shared/config/firebase/firebase-config";

export async function signUp(email: string, password: string): Promise<UserCredential> {
  return createUserWithEmailAndPassword(auth, email, password)
}