import db from '@/shared/config/firebase/firebase-config'
import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  updateDoc,
  query,
  orderBy,
  limit,
  startAfter,
  setDoc,
  CollectionReference,
  DocumentData,
  QueryDocumentSnapshot,
  WithFieldValue,
  UpdateData,
} from 'firebase/firestore/lite'

export interface CartProductData {
  [key: string]: unknown
}

export interface CartObject {
  [productId: string]: CartProductData | null
}

export interface PaginationParams {
  page?: number
  perPage?: number
  cursors?: QueryDocumentSnapshot<DocumentData>[]
}

export interface PaginatedResult<T> {
  data: T[]
  cursor: QueryDocumentSnapshot<DocumentData> | null
  hasMore: boolean
}

class DbOperations<T extends DocumentData = DocumentData> {
  protected collectionRef: CollectionReference<DocumentData>

  constructor(name: string) {
    this.collectionRef = collection(db, name)
  }

  // --- CARTS SPECIALIZED METHODS ---
  // get cart object for user_id
  async getCartByUserId(userId: string): Promise<CartObject> {
    const snap = await getDoc(doc(this.collectionRef, userId))
    if (!snap.exists()) return {}
    return snap.data() as CartObject // { product_id: { ... } }
  }

  // set full cart object for user_id
  async setCartByUserId(userId: string, cartObj: WithFieldValue<CartObject>): Promise<boolean> {
    await setDoc(doc(this.collectionRef, userId), cartObj)
    return true
  }

  // update/add one product in cart for user_id
  async updateCartProduct(
    userId: string,
    productId: string,
    productData: CartProductData,
  ): Promise<boolean> {
    await updateDoc(doc(this.collectionRef, userId), {
      [productId]: productData,
    })
    return true
  }

  // remove one product from cart for user_id
  async removeCartProduct(userId: string, productId: string): Promise<boolean> {
    // Видалення: оновлюємо поле на null (старий робочий варіант)
    await updateDoc(doc(this.collectionRef, userId), {
      [productId]: null,
    })
    return true
  }

  async getAll(): Promise<(T & { id: string })[]> {
    const snapshot = await getDocs(this.collectionRef)
    return snapshot.docs.map((doc) => ({ id: doc.id, ...(doc.data() as T) }))
  }

  async getAllPaginated({
    page = 1,
    perPage = 6,
    cursors = [],
  }: PaginationParams): Promise<PaginatedResult<T & { id: string }>> {
    let q

    const realLimit = perPage + 1 // беремо на 1 більше

    if (page === 1) {
      q = query(this.collectionRef, orderBy('title'), limit(realLimit))
    } else {
      const cursor = cursors[page - 2]
      if (!cursor) throw new Error('Cursor not found')
      q = query(
        this.collectionRef,
        orderBy('title'),
        startAfter(cursor),
        limit(realLimit),
      )
    }

    const snapshot = await getDocs(q)
    const docs = snapshot.docs

    const hasMore = docs.length > perPage

    const data = docs
      .slice(0, perPage)
      .map((doc) => ({ id: doc.id, ...(doc.data() as T) }))
    const lastVisible = docs[docs.length - 2] || null

    return { data, cursor: lastVisible, hasMore }
  }

  async getById(id: string): Promise<T & { id: string }> {
    const snap = await getDoc(doc(this.collectionRef, id))
    return { id: snap.id, ...(snap.data() as T) }
  }

  async setWithId(id: string, data: WithFieldValue<T>): Promise<boolean> {
    await setDoc(doc(this.collectionRef, id), data)
    return true
  }

  async add(data: WithFieldValue<T>): Promise<boolean> {
    await addDoc(this.collectionRef, data)
    return true
  }

  async update(id: string, data: UpdateData<T>): Promise<boolean> {
    await updateDoc(doc(this.collectionRef, id), data)
    return true
  }

  async delete(id: string): Promise<boolean> {
    await deleteDoc(doc(this.collectionRef, id))
    return true
  }
}

export default DbOperations