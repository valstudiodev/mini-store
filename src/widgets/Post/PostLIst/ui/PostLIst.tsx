import { useAppSelector } from "@/app/store/hooks";
import { PostCategoryProps } from "@/entities/post/model/post-types";
import { selectPosts, selectPostsLoading } from "@/entities/post/model/postSelector";
import PostCard from "@/entities/post/post-card/ui/PostCard";
import { selectHasLoaded } from "@/entities/product/model/productSelector";
import '../styles/post-list.scss';
import WarningMessage from "@/shared/ui/WarningMessage/ui/WarningMessage";
import filterPosts from "@/entities/post/model/filterPosts";

function PostList({
  category
}: PostCategoryProps): React.JSX.Element {
  const postList = 'post-list'

  const posts = useAppSelector(selectPosts)
  const hasLoaded = useAppSelector(selectHasLoaded)

  const isLoading = useAppSelector(selectPostsLoading)

  const filteredPosts = filterPosts(posts, category)

  if (isLoading) {
    return <div className="text-center text-4xl">Loading POSTS...</div>
  }

  if (hasLoaded && filteredPosts.length === 0) {
    return <WarningMessage text="No posts found." />
  }

  return (
    <ul className={`${postList}`}>
      {filteredPosts.map((post) => (
        <li
          className={`${postList}__item`}
          key={post.id}
        >
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}

export default PostList;