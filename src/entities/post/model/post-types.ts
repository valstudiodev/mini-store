export interface Post {
  id: string;
  imageUrl: string;
  title: string;
  date: string;
  category: PostCategory;
}

export type PostCategory =
  | 'news'
  | 'latest'
  | 'technology'
  | 'gadgets'
  | 'camera'

export interface CreatePostPayload {
  title: string;
  imageUrl: string;
  date: string;
  category: PostCategory
}

export interface PostCardProps {
  post: Post;
  className?: string;
}

export interface PostCategoryProps {
  category: PostCategory
}

export interface PostsState {
  posts: Post[];
  post: Post | null;
  loading: boolean;
  error: string | null;
  hasLoaded: boolean;
}