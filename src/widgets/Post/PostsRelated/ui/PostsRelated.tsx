import { Section } from '@/shared/primitives';
import '../styles/postRelated.scss';
import Container from '@/shared/primitives/Container/Container';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { selectPosts, selectPostsLoading } from '@/entities/post/model/postSelector';
import { SpinnerDefault } from '@/shared/ui';
import Headline from '@/widgets/Headline/ui/Headline';
import { routeMap } from '@/app/routes/routeMap';
import { useEffect } from 'react';
import { fetchPosts } from '@/entities/post/model/postThunk';
import { PostLIst } from '../..';

interface PostsRelatedProps {
  className?: string;
}

function PostsRelated({
  className = ''
}: PostsRelatedProps): React.JSX.Element {
  const postsRelated = 'posts-related'

  const dispatch = useAppDispatch()

  const posts = useAppSelector(selectPosts)
  const postsLoading = useAppSelector(selectPostsLoading)

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch]);

  const hasRelated = posts.some(
    (post) => post.category === 'related'
  )

  return (
    <Section className={`${postsRelated} ${className}`}>
      <Container className={`${postsRelated}__container`}>
        {postsLoading ? (
          <div className={`${postsRelated}__loading`}>
            <SpinnerDefault size='large' />
          </div>
        ) : (
          hasRelated && (
            <>
              <Headline
                to={routeMap.blog.path}
                linkLabel='read blogs'
                title='related posts'
              />
              <PostLIst category='related' limit={3} />
            </>
          )
        )}
      </Container>
    </Section>
  );
}

export default PostsRelated;