import { Timestamp } from "firebase/firestore";


export interface BlogComment {
  id: string;
  name: string;
  email: string;
  text: string;
  photoUrl?: string;
  createdAt: string;
  parentId?: string;
}


export interface CreatedCommentPayload {
  name: string;
  email: string;
  text: string;
  photoUrl?: string;
  // parentId?: string;
}

export interface CommentsFormData {
  text: string;
  name: string;
  email: string;
}

export interface CreateCommentProps {
  postId: string
}

export interface CommentState {
  comments: BlogComment[],
  isFetching: boolean;
  isCreating: boolean;
  error: string | null;
}

export interface CommentItemProps {
  comment: BlogComment;
  onReply: (commentId: string) => void;
}