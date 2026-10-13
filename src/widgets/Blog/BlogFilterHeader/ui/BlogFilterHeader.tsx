import '../styles/blogFilterHeader.scss';

interface BlogFilterHeaderProps {
  firstItem: number;
  lastItem: number;
  totalResults: number;
  className?: string;
}

function BlogFilterHeader({
  firstItem,
  lastItem,
  totalResults,
  className = ''
}: BlogFilterHeaderProps): React.JSX.Element {
  const blogFilterHeader = 'blog-filter-header'

  return (
    <div className={`${blogFilterHeader} ${className}`}>
      <p className={`${blogFilterHeader}__result`}>
        <span>Showing</span>
        <span>{firstItem}</span> - <span>{lastItem}</span>
        <span>of</span>
        <span>{totalResults}</span>
        {totalResults > 10 ? (<span>results</span>) : (<span>result</span>)}
      </p>
    </div>
  );
}

export default BlogFilterHeader;