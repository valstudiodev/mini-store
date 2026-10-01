import { signOut } from "firebase/auth";
import { auth } from "@/shared/config/firebase/firebase-config";

export async function logout(): Promise<void> {
  await signOut(auth)
}