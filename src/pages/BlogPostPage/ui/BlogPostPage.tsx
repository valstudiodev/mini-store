import Section from "@/shared/primitives/Section/Section";
import '../styles/blogPost.scss';
import { useParams } from "react-router";
import { Post } from "@/entities/post/model/post-types";
import { useEffect, useState } from "react";
import { getPostById } from "@/entities/post/api/postServise";
import WarningMessage from "@/shared/ui/WarningMessage/ui/WarningMessage";
import Container from "@/shared/primitives/Container/Container";
import CommentsSection from "@/widgets/Comment/CommentsSection/ui/CommentsSection";
import PostDetailsPage from "@/entities/post/post-details/ui/PostDetails";
import { SubscribeSection } from "@/widgets";
import InstaLinks from "@/widgets/Insta-links/ui/InstaLinks";
import { SpinnerDefault } from "@/shared/ui";
import { PostsRelated } from "@/widgets/Post";

function BlogPostPage(): React.JSX.Element {
  const classBlogPostPage = 'blog-post-page'

  const { id } = useParams<{ id: string }>()

  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {

    let isMounted = true

    async function loadPost(): Promise<void> {
      if (!id) return

      setIsLoading(true)

      try {
        const postDetails = await getPostById(id)
        if (isMounted) {
          setPost(postDetails)
        }
      } catch (error) {
        console.log('Error');

      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }
    loadPost()

    return () => {
      isMounted = false
    }
  }, [id]);

  if (isLoading) {
    return (
      <div className={`${classBlogPostPage}__loading`}>
        {/* <SpinnerDefault size="large" /> */}
        <div>Loading BLOG POST PAGE....</div>
      </div>
    )
  }

  if (post === null) {
    return <WarningMessage text="Post not found." />
  }


  return (
    <Section className={classBlogPostPage}>
      <Container>
        {/* <PostDetailsPage post={post} /> */}
        {/* <CommentsSection /> */}
        <PostsRelated />
        {/* <SubscribeSection /> */}
        {/* <InstaLinks /> */}
      </Container>
    </Section>
  );
}

export default BlogPostPage;