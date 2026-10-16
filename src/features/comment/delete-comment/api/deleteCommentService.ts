import db from "@/shared/config/firebase/firebase-config";
import { deleteDoc, doc } from "firebase/firestore";


export async function deleteCommentById(commentId: string): Promise<void> {
  const commentDocRef = doc(db, 'comments', commentId)

  await deleteDoc(commentDocRef)
}