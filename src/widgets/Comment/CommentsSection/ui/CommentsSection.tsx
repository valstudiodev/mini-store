import { Section } from '@/shared/primitives';
import '../styles/comments-section.scss';
import CommentsFormWrap from '../../CommentFormWrap/ui/CommentsFormWrap';
import CommentsListWrap from '../../CommentsListWrap/ui/CommentsListWrap';
import { useAppSelector } from '@/app/store/hooks';
import { selectAuthUser } from '@/features/auth/model/authSelector';

function CommentsSection(): React.JSX.Element {
  const commentsSection = 'comments-section'

  const user = useAppSelector(selectAuthUser)
  const isAdmin = user?.role === 'admin'
  const isUser = user?.role === 'user'

  return (
    <Section className={commentsSection}>
      <CommentsListWrap />

      {(isAdmin || isUser) && (
        <CommentsFormWrap />
      )}

    </Section>
  );
}

export default CommentsSection;