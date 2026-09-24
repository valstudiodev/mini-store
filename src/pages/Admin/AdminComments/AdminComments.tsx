import { Section } from "@/shared/primitives";
import Container from "@/shared/primitives/Container/Container";
import './admin-comments.scss';

function AdminComments({
  className = ''
}: { className?: string }): React.JSX.Element {
  const adminCommentsPage = 'admin-comments-page'
  return (
    <Section className={`${adminCommentsPage} ${className}`}>
      <Container className={`${adminCommentsPage}__container`}>
        <h1>Admin comments</h1>
      </Container>
    </Section>
  );
}

export default AdminComments;