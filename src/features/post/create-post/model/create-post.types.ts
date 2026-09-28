import { PostCategory } from "@/entities/post/model/post-types";


export interface PostFormValues {
  title: string;
  imageUrl: string;
  date: string;
  category: PostCategory | ''
}

export type RequestStatus =
  | 'idle'
  | 'loading'
  | 'success'
  | 'error'

export interface PostFormErrors {
  title?: string;
  imageUrl?: string;
  date?: string;
  category?: string
}

