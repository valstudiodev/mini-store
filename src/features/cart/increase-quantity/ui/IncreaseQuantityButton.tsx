import { useAppDispatch } from "@/app/store/hooks";
import { increaseQuantity } from "@/entities/cart/model/cartSlice";
import { IncreaseQuantityButtonProps } from "../model/increase-types";
import '../styles/increase-btn.scss';

function IncreaseQuantityButton({
  product,
  label,
  className = ''
}: IncreaseQuantityButtonProps): React.JSX.Element {
  const btnIncreaseQuantity = 'btn-increase-quantity'

  const dispatch = useAppDispatch()

  const handleIncreaseQuantity = (): void => {
    dispatch(increaseQuantity(product.id))
  }

  return (
    <button
      className={`${btnIncreaseQuantity} ${className}`}
      onClick={handleIncreaseQuantity}>
      {label}
    </button>
  );
}

export default IncreaseQuantityButton;