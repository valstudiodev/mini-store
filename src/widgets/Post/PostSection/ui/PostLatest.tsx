import { Section } from '@/shared/primitives';
import '../styles/post-latest.scss';
import Container from '@/shared/primitives/Container/Container';
import Headline from '@/widgets/Headline/ui/Headline';
import PostList from '../../PostLIst/ui/PostLIst';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { selectPosts } from '@/entities/post/model/postSelector';
import { routeMap } from '@/app/routes/routeMap';
import { useEffect } from 'react';
import { fetchPosts } from '@/entities/post/model/postThunk';
import { useTranslation } from 'react-i18next';

function PostSection(): React.JSX.Element {
  const postSection = 'post-section'

  const { t } = useTranslation()

  const dispatch = useAppDispatch()
  const posts = useAppSelector(selectPosts)

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch]);

  const latestPosts = posts.filter(
    (post) => post.category === 'latest'
  )

  return (
    <Section className={`${postSection}`}>
      <Container className={`${postSection}__container`}>
        {latestPosts.length > 0 && (
          <>
            <Headline
              to={`${routeMap.blog.path}`}
              title={t('home.latestPosts')}
              linkLabel={t('common.readBlogs')}
            />
            <PostList category='latest' />
          </>
        )}
      </Container>
    </Section>
  );
}

export default PostSection;