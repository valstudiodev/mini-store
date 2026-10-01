import { useAppSelector } from "@/app/store/hooks";
import { PostCategoryProps } from "@/entities/post/model/post-types";
import { selectPosts } from "@/entities/post/model/postSelector";
import PostCard from "@/entities/post/ui/PostCard";
import { selectHasLoaded } from "@/entities/product/model/productSelector";
import '../styles/post-list.scss';
import { Link } from "react-router";
import { routeMap } from "@/app/routes/routeMap";

function PostList({
  category
}: PostCategoryProps): React.JSX.Element {
  const postList = 'post-list'

  const posts = useAppSelector(selectPosts)
  const hasLoaded = useAppSelector(selectHasLoaded)

  const filteredPosts = posts.filter(
    (post) => post.category === category
  )

  if (hasLoaded && filteredPosts.length === 0) {
    return <p>Posts is not found.</p>
  }

  return (
    <ul className={`${postList}`}>
      {filteredPosts.map((post) => (
        <li
          className={`${postList}__item`}
          key={post.id}
        >
          <Link
            to={`${routeMap.blogPost.path}`}
            className={`${postList}__link`}
          >
            <PostCard post={post} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default PostList;