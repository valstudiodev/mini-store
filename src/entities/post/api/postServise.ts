import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { Post } from "../model/post-types";
import db from "@/shared/config/firebase/firebase-config";


export async function getPosts(): Promise<Post[]> {
  const postsCollection = collection(db, 'posts')
  const snapShot = await getDocs(postsCollection)

  const posts: Post[] = []

  snapShot.forEach((doc) => {
    const post: Post = {
      id: doc.id,
      ...(doc.data() as Omit<Post, 'id'>)
    }

    posts.push(post)
  });

  return posts
}

export async function getPostById(postId: string): Promise<Post | null> {
  const postDocRef = doc(db, 'posts', postId)
  const postSnap = await getDoc(postDocRef)

  if (!postSnap.exists()) {
    console.log(`Document with ID ${postId} is not found!`);
    return null
  }

  const postData = postSnap.data() as Omit<Post, 'id'>

  return {
    id: postSnap.id,
    ...postData
  }
}