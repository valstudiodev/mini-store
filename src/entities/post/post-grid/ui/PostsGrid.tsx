import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { Post } from '../../model/post-types';
import PostCard from '../../post-card/ui/PostCard';
import '../styles/postsGrid.scss';
import { selectAuthUser } from '@/features/auth/model/authSelector';
import { useState } from 'react';
import { deletePost } from '../../model/postThunk';
import UpdateButton from '@/shared/ui/UpdateButton/ui/UpdateButton';
import { routeMap } from '@/app/routes/routeMap';
import DeleteButton from '@/shared/ui/DeleteButton/ui/DeleteButton';

interface PostGridProps {
  posts: Post[];
  className?: string;
}

function PostsGrid({
  posts,
  className = ''
}: PostGridProps): React.JSX.Element {
  const postsGrid = 'posts-grid'

  const dispatch = useAppDispatch()

  const [error, setError] = useState<string | null>(null);

  const user = useAppSelector(selectAuthUser)

  const isAdmin = user?.role === 'admin'

  const handleDelete = async (postId: string): Promise<void> => {
    setError(null)

    try {
      await dispatch(deletePost(postId)).unwrap()
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message)
      } else {
        setError('Failed to delete a post.')
      }
    }
  }

  return (
    <div className={`${postsGrid} ${className}`}>
      <ul className={`${postsGrid}__list`}>
        {posts.map((post) => (
          <li
            key={post.id}
            className={`${postsGrid}__item`}
          >
            <PostCard
              post={post}
              actions={[
                ...(isAdmin
                  ? [
                    <div className={`${postsGrid}__actions`}>
                      <UpdateButton
                        to={routeMap.postEdit.navigate(post.id)}
                      >
                        Edit
                      </UpdateButton>
                      <DeleteButton
                        onClick={() => handleDelete(post.id)}
                      >
                        Delete
                      </DeleteButton>
                    </div>
                  ] : []
                )
              ]}
            />
          </li>
        ))}
      </ul>
      {error && (
        <p role='alert'>{error}</p>
      )}
    </div>
  );
}

export default PostsGrid;