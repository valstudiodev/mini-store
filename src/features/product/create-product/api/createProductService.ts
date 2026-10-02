import { CreateProductPayload } from "@/entities/product/model/types"
import db from "@/shared/config/firebase/firebase-config"
import { addDoc, collection } from "firebase/firestore"

export async function createProduct(productData: CreateProductPayload): Promise<string> {
  const productsCollection = collection(db, 'products')

  const docRef = await addDoc(productsCollection, productData)

  return docRef.id
}