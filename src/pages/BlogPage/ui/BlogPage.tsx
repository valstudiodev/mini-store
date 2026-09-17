import Container from "@/shared/primitives/Container/Container";
import Section from "@/shared/primitives/Section/Section";
import '../styles/blogPage.scss';
import HeadingTitle from "@/shared/typography/HeadingTitle/HeadingTitle";
import { Link } from "react-router";

function BlogPage(): React.JSX.Element {
  const classBlogPage = 'blog-page'

  return (
    <Section className={classBlogPage}>
      <Container className={`${classBlogPage}__container`}>
        <HeadingTitle>
          Blog page

          <Link
            to='/blog-post'
          >
            To blog post
          </Link>
          {/* <Outlet /> */}
        </HeadingTitle>
      </Container>
    </Section>
  );
}

export default BlogPage;