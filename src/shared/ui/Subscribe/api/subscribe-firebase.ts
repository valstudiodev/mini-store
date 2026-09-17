import db from "@/shared/config/firebase/firebase-config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";


export function addSubscriber(email: string) {
  const subscribersCollectionRef = collection(db, 'subscribers')

  const docRef = addDoc(subscribersCollectionRef,
    {
      email,
      createdAt: serverTimestamp()
    }
  )

  return docRef
}