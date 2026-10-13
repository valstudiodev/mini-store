import { SearchInput } from '@/shared/ui';
import { ProductSearchProps } from '../model/product-search.types';
import '../styles/product-search.scss';

function ProductSearch({
  value,
  onSearch,
  className = ''
}: ProductSearchProps): React.JSX.Element {
  const productSearch = 'product-search'

  return (
    <SearchInput
      className={`${productSearch} ${className}`}
      onSearch={onSearch}
      value={value}
    />
  );
}

export default ProductSearch;