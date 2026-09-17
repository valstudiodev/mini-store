import { removeFromCart } from "@/entities/cart/model/cartSlice";
import { RemoveFromCartButtonProps } from "../model/remove-types";
import { useAppDispatch } from "@/app/store/hooks";
import '../styles/remove-btn.scss';

function RemoveFromCartButton({
  product,
  className = '',
  label
}: RemoveFromCartButtonProps): React.JSX.Element {
  const btnRemoveFromCart = 'btn-remove-from-cart'

  const dispatch = useAppDispatch()

  const handleDeleteItem = (): void => {
    dispatch(removeFromCart(product.id))
  }

  return (
    <button
      className={`${btnRemoveFromCart} ${className}`}
      onClick={handleDeleteItem}
    >
      {label}
    </button>
  );
}

export default RemoveFromCartButton;