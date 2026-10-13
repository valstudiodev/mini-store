import { SearchInput } from '@/shared/ui';
import '../styles/postSearch.scss';

interface PostSearchProps {
  value: string;
  onSearch: (value: string) => void;
  className?: string;
}

function PostSearch({
  value,
  onSearch,
  className = ''
}: PostSearchProps) {
  const postSearch = 'post-search'

  return (
    <SearchInput
      className={`${postSearch} ${className}`}
      onSearch={onSearch}
      value={value}
    />
  );
}

export default PostSearch;