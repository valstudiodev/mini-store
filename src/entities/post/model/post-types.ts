export interface Post {
  id: string;
  imageUrl: string;
  title: string;
  date: string;
  category: PostCategory;
}

export type PostCategory =
  | 'news'
  | 'technology'
  | 'gadgets'
  | 'camera'

export interface CreatePostPayload {
  title: string;
  imageUrl: string;
  date: string;
  category: PostCategory
}