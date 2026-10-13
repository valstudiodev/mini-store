import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import '../styles/comments-list.scss';
import { selectCommentCount, selectComments } from '@/entities/comment/model/commentsSelector';
import CommentItem from '@/entities/comment/ui/CommentItem';
import { useEffect } from 'react';
import { fetchComments } from '@/entities/comment/model/commentThunk';

function CommentsList(): React.JSX.Element {
  const commentList = 'comment-list'

  const dispatch = useAppDispatch()
  const comments = useAppSelector(selectComments)

  useEffect(() => {
    dispatch(fetchComments())
  }, [dispatch]);

  const onReply = (commentId: string): void => {
    console.log('---reply comment---', commentId);
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
          />
        </li>
      ))}
    </ul>
  );
}

export default CommentsList;