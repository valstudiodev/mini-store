import db from "@/shared/config/firebase/firebase-config";
import { deleteDoc, doc } from "firebase/firestore";


export async function deletePostById(postId: string): Promise<void> {
  const postDocRef = doc(db, 'posts', postId)

  await deleteDoc(postDocRef)
}