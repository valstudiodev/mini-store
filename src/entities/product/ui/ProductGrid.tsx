import AddToCartButton from '@/features/cart/add-to-cart/ui/AddToCartBtn';
import { ProductGridProps } from '../model/types';
import '../styles/product-grid.scss';
import ProductCard from './ProductCard';
import { useAppDispatch } from '@/app/store/hooks';
import { addToCart } from '@/entities/cart/model/cartSlice';

function ProductGrid({
  products,
  className = '',
}: ProductGridProps): React.JSX.Element {
  const productGrid = 'product-grid'

  const dispatch = useAppDispatch()

  const handleAddToCart = (productId: string): void => {
    dispatch(addToCart({
      productId,
      quantity: 1,
    }))
  }

  return (
    <div className={`${productGrid} ${className}`}>
      <ul className={`${productGrid}__list`}>
        {products.map((product) => (
          <li
            className={`${productGrid}__item`}
            key={product.id}
          >
            <ProductCard
              product={product}
              actions={[
                <AddToCartButton
                  className={`${productGrid}__btn-add`}
                  onClick={() => handleAddToCart(product.id)}
                />
              ]}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductGrid;