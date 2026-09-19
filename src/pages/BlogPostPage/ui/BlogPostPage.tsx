import Section from "@/shared/primitives/Section/Section";
import { HeadingTitle } from "@/shared/typography";
import '../styles/blogPost.scss';

function BlogPostPage(): React.JSX.Element {
  const classBlogPostPage = 'blog-post-page'

  return (
    <Section className={classBlogPostPage}>
      <HeadingTitle>
        Blog post page
      </HeadingTitle>
    </Section>
  );
}

export default BlogPostPage;