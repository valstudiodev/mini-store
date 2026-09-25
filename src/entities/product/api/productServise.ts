import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore"
import { CreateProductPayload, Product } from "../model/types"
import db from "@/shared/config/firebase/firebase-config"


export async function createProduct(productData: CreateProductPayload): Promise<string> {
  const productsCollection = collection(db, 'products')

  const docRef = await addDoc(productsCollection, productData)

  return docRef.id
}

export async function getProducts(): Promise<Product[]> {
  const productsCollection = collection(db, 'products')
  const snapshot = await getDocs(productsCollection)

  const products: Product[] = []

  snapshot.forEach((doc) => {
    const product: Product = {
      id: doc.id,
      ...(doc.data() as Omit<Product, 'id'>)
    }

    products.push(product)
  });

  return products
}

export async function getProductById(productId: string): Promise<Product | null> {
  const productDocRef = doc(db, 'products', productId)
  const productSnap = await getDoc(productDocRef)

  if (!productSnap.exists()) {
    console.log(`Document with ID ${productId} is not found!`);
    return null;
  }

  const productData = productSnap.data() as Omit<Product, 'id'>

  return {
    id: productSnap.id,
    ...productData,
  }
}

export async function deleteProductById(productId: string): Promise<void> {
  const productDocRef = doc(db, 'products', productId)

  await deleteDoc(productDocRef)
}

export async function updateProductById(productId: string, productData: CreateProductPayload): Promise<Product> {
  const productDocRef = doc(db, 'products', productId)

  await updateDoc(productDocRef, { ...productData })

  return {
    id: productId,
    ...productData
  }
}