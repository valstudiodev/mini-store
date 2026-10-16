import { Fragment } from 'react/jsx-runtime';
import { CommentItemProps } from '../model/types';
import '../styles/comment-item.scss';

function CommentItem({
  comment,
  onReply,
  actions
}: CommentItemProps): React.JSX.Element {
  const commentItem = 'comment-item'

  return (
    <article className={`${commentItem}`}>
      {comment.photoUrl && (
        <div className={`${commentItem}__image`}>
          <img src={comment.photoUrl} alt='' />
        </div>
      )}
      <div className={`${commentItem}__body`}>
        <div className={`${commentItem}__header`}>
          <span className={`${commentItem}__name`}>
            {comment.name}
          </span>
          <span className={`${commentItem}__date`}>
            {comment.createdAt}
          </span>
        </div>
        <p className={`${commentItem}__text`}>
          {comment.text}
        </p>
        <button
          type='button'
          onClick={() => onReply(comment.id)}
          className={`${commentItem}__btn`}
        >
          Reply Now
        </button>
        {actions?.map((action, index) => (
          <Fragment
            key={index}
          >
            {action}
          </Fragment>
        ))}
      </div>
    </article >
  );
}

export default CommentItem;