import { UserCredential } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/shared/config/firebase/firebase-config";
import { createUserProfile } from "../../api/userProfileApi";

export async function signUp(email: string, password: string): Promise<UserCredential> {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  )

  await createUserProfile(userCredential.user)

  return userCredential
}