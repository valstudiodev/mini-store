import { CartItemQuantityProps } from '../model/item-quantity-types';
import '../styles/cartItemQuantity.scss';

function CartItemQuantity({
  product,
  className = '',
}: CartItemQuantityProps): React.JSX.Element {
  const cartItemQuantity = 'cart-item-quantity'

  return (
    <div className={`${cartItemQuantity} ${className}`}>
      {product.quantity}
    </div>
  );
}

export default CartItemQuantity;