import { Post } from '../../model/post-types';
import PostCard from '../../post-card/ui/PostCard';
import '../styles/postsGrid.scss';

interface PostGridProps {
  posts: Post[];
  className?: string;
}

function PostsGrid({
  posts,
  className = ''
}: PostGridProps): React.JSX.Element {
  const postsGrid = 'posts-grid'

  return (
    <div className={`${postsGrid} ${className}`}>
      <ul className={`${postsGrid}__list`}>
        {posts.map((post) => (
          <li
            key={post.id}
            className={`${postsGrid}__item`}
          >
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsGrid;