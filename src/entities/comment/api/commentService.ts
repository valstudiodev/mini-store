import { addDoc, collection, getDocs, serverTimestamp } from "firebase/firestore";
import { BlogComment, CreatedCommentPayload } from "../model/types";
import db from "@/shared/config/firebase/firebase-config";


export async function createComment(payload: CreatedCommentPayload) {
  const commentsCollection = collection(db, 'comments')

  const commentDocRef = await addDoc(commentsCollection, {
    ...payload,
    createdAt: serverTimestamp()
  })

  return commentDocRef.id
}

export async function getComments(): Promise<BlogComment[]> {
  const commentsCollection = collection(db, 'comments')
  const commentShapshot = await getDocs(commentsCollection)

  const comments: BlogComment[] = commentShapshot.docs.map(
    (doc) => {
      const data = doc.data()
      const createdAt = data.createdAt

      return {
        id: doc.id,
        ...data,
        createdAt:
          createdAt && typeof createdAt.toDate === 'function'
            ? createdAt.toDate().toLocaleDateString('en-CA', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            })
            : ''
      } as BlogComment
    }
  )
  return comments
}

