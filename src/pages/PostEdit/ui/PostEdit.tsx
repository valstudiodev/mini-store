import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { selectPost, selectPostError, selectPostsLoading } from "@/entities/post/model/postSelector";
import { fetchPostById } from "@/entities/post/model/postThunk";
import PostEditForm from "@/features/post/edit-post/ui/PostEditForm";
import { Section } from "@/shared/primitives";
import Container from "@/shared/primitives/Container/Container";
import WarningMessage from "@/shared/ui/WarningMessage/ui/WarningMessage";
import { useEffect } from "react";
import { useParams } from "react-router";
import '../styles/post-edit.scss';

function PostEdit(): React.JSX.Element {
  const postEdit = 'post-edit'

  const { id } = useParams<{ id: string }>()

  const dispatch = useAppDispatch()

  const post = useAppSelector(selectPost)
  const loading = useAppSelector(selectPostsLoading)
  const error = useAppSelector(selectPostError)

  useEffect(() => {
    if (id) {
      dispatch(fetchPostById({ postId: id }))
    }
  }, [id, dispatch]);

  if (loading) {
    return <div>Loading POST EDIT...</div>
  }

  if (error) {
    return (
      <div>
        <p>Failed </p>
        <p>{error}</p>
      </div>
    )
  }

  if (!post) {
    return <WarningMessage text="Post not found." />
  }

  return (
    <Section className={postEdit}>
      <Container className={`${postEdit}__container`}>
        <PostEditForm />
      </Container>
    </Section>
  );
}

export default PostEdit;