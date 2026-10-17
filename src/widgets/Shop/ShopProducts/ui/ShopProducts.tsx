import '../styles/shop-products.scss';
import { ShopProductsProps } from '../model/shop-products.types';
import ProductGrid from '@/entities/product/product-grid/ui/ProductGrid';
import { Pagination } from '@/shared/ui';
import WarningMessage from '@/shared/ui/WarningMessage/ui/WarningMessage';

function ShopProducts({
  products,
  className = '',
  currentPage,
  onPageChange,
  totalResults,
  hasLoaded,
  totalPages
}: ShopProductsProps): React.JSX.Element {
  const shopProducts = 'shop-products'

  return (
    <div className={`${shopProducts} ${className}`}>
      {hasLoaded && totalResults === 0
        ? <WarningMessage text='No posts found in this category.' />
        : <ProductGrid products={products} />
      }

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          onPageChange={onPageChange}
          totalPages={totalPages}
        />
      )}

    </div>
  );
}

export default ShopProducts;