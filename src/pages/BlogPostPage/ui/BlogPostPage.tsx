import Container from "@/shared/primitives/Container/Container";
import Section from "@/shared/primitives/Section/Section";
import { HeadingTitle } from "@/shared/typography";
import '../styles/blogPost.scss';

function BlogPostPage(): React.JSX.Element {
  const classBlogPostPage = 'blog-post-page'

  return (
    <Section className={classBlogPostPage}>
      <Container className={`${classBlogPostPage}__container`}  >
        <HeadingTitle>
          Blog post page
        </HeadingTitle>
      </Container>
    </Section>
  );
}

export default BlogPostPage;