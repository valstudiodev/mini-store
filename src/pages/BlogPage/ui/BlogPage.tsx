import Section from "@/shared/primitives/Section/Section";
import '../styles/blogPage.scss';
import HeadingTitle from "@/shared/typography/HeadingTitle/HeadingTitle";
import { Link } from "react-router";
import SmartWatches from "@/pages/HomePage/ui/SmartWatches";

function BlogPage(): React.JSX.Element {
  const classBlogPage = 'blog-page'

  return (
    <Section className={classBlogPage}>
      <HeadingTitle>
        Blog page

        <Link
          to='/blog-post'
        >
          To blog post
        </Link>
        {/* <Outlet /> */}
      </HeadingTitle>
    </Section>
  );
}

export default BlogPage;