import { Post } from "@/entities/post/model/post-types";

export interface BlogPostProps {
  posts: Post[];
  className?: string;
  totalResults: number;

  currentPage: number;
  onPageChange: (page: number) => void;
  totalPages: number;
}