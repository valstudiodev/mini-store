import ProductFilter from '@/features/shop/product-filter/ui/ProductFilter';
import '../styles/shop-sidebar.scss';
import { CategoryFilterType } from '@/features/shop/product-filter/model/product-filter.types';
import ProductSearch from '@/features/shop/product-search/ui/ProductSearch';

interface ShopSidebarProps {
  category: CategoryFilterType;
  tag: string;
  brand: string;
  price: string;
  value: string;
  className?: string;

  onCategoryChange: (category: CategoryFilterType) => void;
  onSearch: (value: string) => void;
  onTagChange: (value: string) => void;
  onBrandChange: (value: string) => void;
  onPriceChange: (value: string) => void;
}

function ShopSidebar({
  category,
  tag,
  brand,
  price,
  value,
  className,
  onCategoryChange,
  onSearch,
  onTagChange,
  onBrandChange,
  onPriceChange
}: ShopSidebarProps): React.JSX.Element {
  const shopSidebar = 'shop-sidebar'

  return (
    <aside className={`${shopSidebar} ${className}`}>
      <ProductSearch
        value={value}
        onSearch={onSearch}
      />

      <ProductFilter
        category={category}
        tag={tag}
        brand={brand}
        price={price}
        onCategoryChange={onCategoryChange}
        onTagChange={onTagChange}
        onBrandChange={onBrandChange}
        onPriceChange={onPriceChange}
      />
    </aside>
  );
}

export default ShopSidebar;