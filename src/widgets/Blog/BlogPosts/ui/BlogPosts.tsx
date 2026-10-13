import { Section } from '@/shared/primitives';
import '../styles/blogPosts.scss';
import { Pagination } from '@/shared/ui';
import { BlogPostProps } from '../model/blogPosts-types';
import PostsGrid from '@/entities/post/post-grid/ui/PostsGrid';
import WarningMessage from '@/shared/ui/WarningMessage/ui/WarningMessage';

function BlogPosts({
  posts,
  className = '',
  currentPage,
  onPageChange,
  totalResults,
  totalPages
}: BlogPostProps): React.JSX.Element {
  const blogPostSection = 'blog-post-section'

  return (
    <Section className={`${blogPostSection} ${className}`}>
      {totalResults === 0
        ? <WarningMessage text='No posts found in this category.' />
        : <PostsGrid posts={posts} />}

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          onPageChange={onPageChange}
          totalPages={totalPages}
        />
      )}
    </Section>
  );
}

export default BlogPosts;