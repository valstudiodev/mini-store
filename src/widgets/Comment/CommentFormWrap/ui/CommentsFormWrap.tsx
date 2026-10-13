import { CreateComment } from '@/features/comment';
import '../styles/commentsFormWrap.scss';

function CommentsFormWrap(): React.JSX.Element {
  const commentsFormWrap = 'comments-form-wrap'

  return (
    <div className={commentsFormWrap}>
      <h3 className={`${commentsFormWrap}__title`}>
        Leave a comment
      </h3>
      <p className={`${commentsFormWrap}__text`}>
        Your email address will not be published. Required fields are marked *
      </p>
      <CreateComment />
    </div>
  );
}

export default CommentsFormWrap;