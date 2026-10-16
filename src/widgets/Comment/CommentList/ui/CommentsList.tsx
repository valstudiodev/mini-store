import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import '../styles/comments-list.scss';
import { selectComments } from '@/entities/comment/model/commentsSelector';
import CommentItem from '@/entities/comment/ui/CommentItem';
import { useEffect, useState } from 'react';
import { fetchComments } from '@/entities/comment/model/commentThunk';
import { selectAuthUser } from '@/features/auth/model/authSelector';
import DeleteButton from '@/shared/ui/DeleteButton/ui/DeleteButton';
import { deleteComment } from '@/features/comment/delete-comment/model/delete-comment';

function CommentsList(): React.JSX.Element {
  const commentList = 'comment-list'

  const dispatch = useAppDispatch()
  const comments = useAppSelector(selectComments)

  const [error, setError] = useState<string | null>(null);

  const user = useAppSelector(selectAuthUser)
  const isAdmin = user?.role === 'admin'

  useEffect(() => {
    dispatch(fetchComments())
  }, [dispatch]);

  const onReply = (commentId: string): void => {
    console.log('---reply comment---', commentId);
  }

  const handleDelete = async (commentId: string): Promise<void> => {
    setError(null)

    try {
      await dispatch(deleteComment(commentId)).unwrap()
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message)
      } else {
        setError('Failed to delete comment.')
      }
    }
  }

  return (
    <ul className={commentList}>
      {comments.map((comment) => (
        <li
          key={comment.id}
          className={`${commentList}__item`}
        >
          <CommentItem
            comment={comment}
            onReply={onReply}
            actions={[
              ...(isAdmin
                ? [
                  <DeleteButton
                    onClick={() => handleDelete(comment.id)}
                  >
                    Delete
                  </DeleteButton>
                ] : []
              )
            ]}
          />
        </li>
      ))}
      {error && (
        <p role='alert'>{error}</p>
      )}
    </ul>
  );
}

export default CommentsList;