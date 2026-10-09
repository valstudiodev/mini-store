import db from "@/shared/config/firebase/firebase-config";
import { AuthUser } from "@/shared/types/Role";
import { User } from "firebase/auth";
import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";


export async function createUserProfile(firebaseUser: User) {
  const uid = firebaseUser.uid

  const email = firebaseUser.email

  const userDocRef = doc(db, 'users', uid)

  await setDoc(userDocRef, {
    uid,
    email,
    role: 'user',
  })

  return uid
}


export async function getUserProfile(uid: string): Promise<AuthUser | null> {
  const userDocRef = doc(db, 'users', uid)
  const userSnap = await getDoc(userDocRef)

  if (!userSnap.exists()) {
    console.log(`Document with ID ${uid} is not found!`);
    return null
  }

  const data = userSnap.data()

  return {
    uid: userSnap.id,
    email: data.email,
    role: data.role
  }
}