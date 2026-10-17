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

export type PostFilter = PostCategory | 'all'

export interface ParagraphBlock {
  type: 'paragraph',
  paragraphs: string[]
}

export interface QuoteBlock {
  type: 'quote';
  text: string;
}

export interface ContentListBlock {
  type: 'contentList';
  title: string;
  list: string[];
  paragraphs: string[]
}

export interface imageContentBlock {
  type: 'imageContent';
  image: string;
  title: string;
  paragraphs: string[];
}

export interface TextBlock {
  type: 'text';
  paragraphs: string[]
}

export type PostContentBlock =
  | ParagraphBlock
  | QuoteBlock
  | ContentListBlock
  | imageContentBlock
  | TextBlock

export interface PostDetails extends Post {
  content?: string[];
  additionalImage?: string;
}

export interface PostDetailsData {
  content: PostContentBlock[],
}

export interface CreatePostPayload {
  title: string;
  imageUrl: string;
  date: string;
  category: PostCategory;
}

export interface PostCardProps {
  post: Post;
  className?: string;
  actions?: React.ReactElement[];
}

export interface PostCategoryProps {
  category: PostFilter;
  limit?: number;
}

export interface PostsState {
  posts: Post[];
  post: Post | null;
  loading: boolean;
  error: string | null;
  hasLoaded: boolean;
}

export interface PostEditFormValues {
  title: string;
  imageUrl: string;
  date: string;
  category: PostCategory | '';
}