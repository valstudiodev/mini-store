import { useAppSelector } from '@/app/store/hooks';
import '../styles/commentsListWrap.scss';
import { selectCommentCount } from '@/entities/comment/model/commentsSelector';
import CommentsList from '../../CommentList/ui/CommentsList';

function CommentsListWrap(): React.JSX.Element {
  const commentsListWrap = 'comments-list-wrap'

  const commentsCount = useAppSelector(selectCommentCount)

  const isCommentsCount = commentsCount > 0


  return (
    <div className={commentsListWrap}>
      <div className={`${commentsListWrap}__header`}>
        {isCommentsCount && (
          <>
            <span className={`${commentsListWrap}__count`}>
              {commentsCount}
            </span>
            <h3 className={`${commentsListWrap}__title`}>
              Comments
            </h3>
          </>
        )}
      </div>
      <CommentsList />
    </div>
  );
}

export default CommentsListWrap;