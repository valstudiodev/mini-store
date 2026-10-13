import { Section } from '@/shared/primitives';
import '../styles/comments-section.scss';
import CommentsFormWrap from '../../CommentFormWrap/ui/CommentsFormWrap';
import CommentsListWrap from '../../CommentsListWrap/ui/CommentsListWrap';

function CommentsSection(): React.JSX.Element {
  const commentsSection = 'comments-section'

  return (
    <Section className={commentsSection}>
      <CommentsListWrap />
      <CommentsFormWrap />
    </Section>
  );
}

export default CommentsSection;