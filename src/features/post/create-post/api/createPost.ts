import { CreatePostPayload } from "@/entities/post/model/post-types";
import db from "@/shared/config/firebase/firebase-config";
import { addDoc, collection } from "firebase/firestore";


export async function createPost(postData: CreatePostPayload): Promise<string> {
  const postCollection = collection(db, 'posts')

  const docRef = await addDoc(postCollection, postData)

  return docRef.id
}