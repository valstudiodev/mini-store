import { Section } from "@/shared/primitives";
import Container from "@/shared/primitives/Container/Container";
import './admin-comments.scss';
import { Title } from "@/shared/typography";

function AdminComments({
  className = ''
}: { className?: string }): React.JSX.Element {
  const adminCommentsPage = 'admin-comments-page'
  return (
    <Section className={`${adminCommentsPage} ${className}`}>
      <Container className={`${adminCommentsPage}__container`}>
        <Title as="h1">
          Comments
        </Title>
      </Container>
    </Section>
  );
}

export default AdminComments;