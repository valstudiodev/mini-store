import db from "@/shared/config/firebase/firebase-config"
import { deleteDoc, doc } from "firebase/firestore"

export async function deleteProductById(productId: string): Promise<void> {
  const productDocRef = doc(db, 'products', productId)

  await deleteDoc(productDocRef)
}