import { BlogFilterHeader, BlogPosts, BlogSidebar } from '@/widgets/Blog';
import '../styles/blogFilter.scss';
import { useState } from 'react';
import { useAppSelector } from '@/app/store/hooks';
import { selectPostError, selectPosts, selectPostsLoading } from '@/entities/post/model/postSelector';
import filterPosts from '@/entities/post/model/filterPosts';
import { PostFilter } from '@/entities/post/model/post-types';
import { SpinnerOpen } from '@/shared/ui';

function BlogFilter(): React.JSX.Element {
  const blogFilter = 'blog-filter'

  const posts = useAppSelector(selectPosts)
  const isLoading = useAppSelector(selectPostsLoading)
  const error = useAppSelector(selectPostError)

  const [searchValue, setSearchValue] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [category, setCategory] = useState<PostFilter>('all');

  const filteredByCategory = filterPosts(posts, category)

  const normalizedSearch = searchValue.trim().toLowerCase()

  const filteredPosts = filteredByCategory.filter(
    (post) => normalizedSearch === '' || post.title.includes(normalizedSearch)
  )

  const handleCategoryChange = (newCategory: PostFilter): void => {
    setCategory(newCategory)
    setCurrentPage(1)
  }

  const handleSearchChange = (value: string): void => {
    setSearchValue(value)
    setCurrentPage(1)
  }

  const itemsPerPage = 6

  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage)

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage

  const firstItem = startIndex + 1
  const lastItem = Math.min(startIndex + itemsPerPage, filteredPosts.length)

  const currentPosts = filteredPosts.slice(startIndex, endIndex)

  if (isLoading) {
    return <SpinnerOpen size='large' />
  }

  if (error) {
    return (
      <div role='alert' className='text-center text-3xl'>
        <p>Failed to fetch posts.</p>
        <p>{error}</p>
      </div>
    )
  }

  return (
    <div className={blogFilter}>
      <BlogSidebar
        value={searchValue}
        category={category}
        onSearch={handleSearchChange}
        onCategoryChange={handleCategoryChange}
        className={`${blogFilter}__sidebar`}
      />
      <div className={`${blogFilter}__wrap`}>
        <BlogFilterHeader
          firstItem={firstItem}
          lastItem={lastItem}
          totalResults={filteredPosts.length}
          className={`${blogFilter}__header`}
        />

        <BlogPosts
          posts={currentPosts}
          totalResults={filteredPosts.length}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          totalPages={totalPages}
          className={`${blogFilter}__posts`}
        />

      </div>
    </div>
  );
}

export default BlogFilter;