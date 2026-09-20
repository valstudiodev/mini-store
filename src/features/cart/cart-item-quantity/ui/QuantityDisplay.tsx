import { CartItemQuantityProps } from '../model/quantityDispaly';
import '../styles/quantityDisplay.scss';

function QuantityDisplay({
  quantity,
  className = '',
}: CartItemQuantityProps): React.JSX.Element {
  const cartItemQuantity = 'cart-item-quantity'

  return (
    <div className={`${cartItemQuantity} ${className}`}>
      {quantity}
    </div>
  );
}

export default QuantityDisplay;