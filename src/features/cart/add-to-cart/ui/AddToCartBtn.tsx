import '../styles/btnAddToCart.scss';
import { ShoppingCart } from "lucide-react";

interface AddToCartBtnProps {
  className?: string;
  onClick: () => void;
  showIcon?: boolean;
}

function AddToCartButton({
  className = '',
  onClick,
  showIcon = true
}: AddToCartBtnProps): React.JSX.Element {
  const btnAddToCart = 'btn-add-to-cart'

  return (
    <button
      type="button"
      className={`${btnAddToCart} ${className}`}
      onClick={onClick}
    >
      Add to cart
      {showIcon && (
        <span className={`${btnAddToCart}__icon`}>
          <ShoppingCart size={16} />
        </span>
      )}
    </button>
  );
}

export default AddToCartButton;