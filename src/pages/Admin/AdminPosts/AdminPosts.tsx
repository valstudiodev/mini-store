import { Section } from "@/shared/primitives";
import Container from "@/shared/primitives/Container/Container";
import './admin-posts.scss';

function AdminPosts({
  className = ''
}: { className?: string }): React.JSX.Element {
  const adminPostsPage = 'admin-post-page'

  return (
    <Section className={`${adminPostsPage} ${className}`}>
      <Container>
        <h1>Admin posts</h1>
      </Container>
    </Section>
  );
}

export default AdminPosts;