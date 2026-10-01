import { CreatePostPayload, Post } from "@/entities/post/model/post-types";
import db from "@/shared/config/firebase/firebase-config";
import { doc, updateDoc } from "firebase/firestore";


export async function updatePostById(postId: string, postData: CreatePostPayload): Promise<Post> {
  const postDocRef = doc(db, 'posts', postId)

  await updateDoc(postDocRef, { ...postData })

  return {
    id: postId,
    ...postData
  }
}