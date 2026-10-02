import { CreateProductPayload, Product } from "@/entities/product/model/types"
import db from "@/shared/config/firebase/firebase-config"
import { doc, updateDoc } from "firebase/firestore"

export async function updateProductById(productId: string, productData: CreateProductPayload): Promise<Product> {
  const productDocRef = doc(db, 'products', productId)

  await updateDoc(productDocRef, { ...productData })

  return {
    id: productId,
    ...productData
  }
}