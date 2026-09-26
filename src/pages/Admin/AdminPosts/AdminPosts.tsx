import { Section } from "@/shared/primitives";
import Container from "@/shared/primitives/Container/Container";
import './admin-posts.scss';
import { Title } from "@/shared/typography";

function AdminPosts({
  className = ''
}: { className?: string }): React.JSX.Element {
  const adminPostsPage = 'admin-post-page'

  return (
    <Section className={`${adminPostsPage} ${className}`}>
      <Container>
        <Title as="h1">
          Posts
        </Title>
      </Container>
    </Section>
  );
}

export default AdminPosts;