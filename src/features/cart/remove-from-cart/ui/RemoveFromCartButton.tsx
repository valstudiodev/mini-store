import { removeFromCart } from "@/entities/cart/model/cartSlice";
import { RemoveFromCartButtonProps } from "../model/remove-types";
import { useAppDispatch } from "@/app/store/hooks";
import '../styles/remove-btn.scss';
import { X } from "lucide-react";

function RemoveFromCartButton({
  product,
  className = '',
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
      <span>
        <X size={36} />
      </span>
    </button>
  );
}

export default RemoveFromCartButton;