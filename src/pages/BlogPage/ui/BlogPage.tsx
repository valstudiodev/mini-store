import Section from "@/shared/primitives/Section/Section";
import '../styles/blogPage.scss';
import Container from "@/shared/primitives/Container/Container";
import { useAppDispatch } from "@/app/store/hooks";
import { useEffect } from "react";
import { fetchPosts } from "@/entities/post/model/postThunk";
import { BlogFilter } from "@/features/blog";
import { SubscribeSection } from "@/widgets";
import InstaLinks from "@/widgets/Insta-links/ui/InstaLinks";

function BlogPage(): React.JSX.Element {
  const classBlogPage = 'blog-page'

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch]);

  return (
    <Section className={classBlogPage}>
      <Container className={`${classBlogPage}__container`}>
        <BlogFilter />
        <SubscribeSection />
        <InstaLinks />
      </Container>
    </Section>
  );
}

export default BlogPage;