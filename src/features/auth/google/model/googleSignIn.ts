import { signInWithPopup, UserCredential } from "firebase/auth";
import { auth, googleProvider } from "@/shared/config/firebase/firebase-config";
import { createUserProfile, getUserProfile } from "../../api/userProfileApi";

export async function googleSignIn(): Promise<UserCredential> {

  const result = await signInWithPopup(auth, googleProvider)

  const userProfile = await getUserProfile(result.user.uid)

  if (!userProfile) {
    await createUserProfile(result.user)
  }

  return result
}