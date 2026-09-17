import { useAppDispatch } from "@/app/store/hooks";
import { decreaseQuantity } from "@/entities/cart/model/cartSlice";
import { DecreaseQuantityButtonProps } from "../model/decrease-types";
import '../styles/decrease-btn.scss';

function DecreaseQuantityButton({
  product,
  label,
  className = ''
}: DecreaseQuantityButtonProps): React.JSX.Element {
  const btnDecreaseQuantity = 'btn-decrease-quantity'

  const dispatch = useAppDispatch()

  const handleDecreaseQuantity = (): void => {
    dispatch(decreaseQuantity(product.id))
  }

  return (
    <button
      className={`${btnDecreaseQuantity} ${className}`}
      onClick={handleDecreaseQuantity}>
      {label}
    </button>
  );
}

export default DecreaseQuantityButton;