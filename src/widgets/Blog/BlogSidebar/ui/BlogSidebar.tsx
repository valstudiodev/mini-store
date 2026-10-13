import PostSearch from '@/entities/post/post-search/ui/PostSearch';
import '../styles/blogSidebar.scss';
import { PostFilter } from '@/entities/post/model/post-types';
import PostFilterComponent from '@/features/post/post-filter/ui/PostFilterComponent';
import BlogSocialLinks from '../../BlogSocialLinks/ui/BlogSocialLinks';

interface BlogSidebarProps {
  value: string;
  category: PostFilter;
  className?: string;

  onSearch: (value: string) => void;
  onCategoryChange: (category: PostFilter) => void;
}

function BlogSidebar({
  value,
  className = '',
  category,

  onSearch,
  onCategoryChange
}: BlogSidebarProps): React.JSX.Element {
  const blogSidebar = 'blog-sidebar'

  return (
    <aside className={`${blogSidebar} ${className}`}>
      <PostSearch
        value={value}
        onSearch={onSearch}
      />
      <div className={`${blogSidebar}__wrap`}>
        <PostFilterComponent
          category={category}
          onCategoryChange={onCategoryChange}
        />

        <BlogSocialLinks />
      </div>


    </aside>
  );
}

export default BlogSidebar;