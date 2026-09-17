import { Product } from '@/entities/product/model/types';
import '../styles/btnAddToCart.scss';
import { ShoppingCart } from "lucide-react";
import { useAppDispatch } from '@/app/store/hooks';
import { addToCart } from '../../../../entities/cart/model/cartSlice';

interface AddToCartBtnProps {
  className?: string;
  product: Product
}

function AddToCartButton({
  className = '',
  product
}: AddToCartBtnProps): React.JSX.Element {
  const btnAddToCart = 'btn-add-to-cart'

  const dispatch = useAppDispatch()

  const handleAddToCart = (): void => {
    dispatch(addToCart(product.id))
  }

  return (
    <button
      type="button"
      className={`${btnAddToCart} ${className}`}
      onClick={handleAddToCart}
    >
      Add to cart
      <span className={`${btnAddToCart}__icon`}>
        <ShoppingCart size={16} />
      </span>
    </button>
  );
}

export default AddToCartButton;