import '../styles/shop-products.scss';
import { ShopProductsProps } from '../model/shop-products.types';
import ProductGrid from '@/entities/product/ui/ProductGrid';
import Pagination from '@/widgets/Pagination/ui/Pagination';

function ShopProducts({
  products,
  className = '',
  currentPage,
  onPageChange,
  totalPages
}: ShopProductsProps): React.JSX.Element {
  const shopProducts = 'shop-products'

  return (
    <div className={`${shopProducts} ${className}`}>
      {/* ProductGrid */}
      <ProductGrid products={products} />

      {/* Pagination */}
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