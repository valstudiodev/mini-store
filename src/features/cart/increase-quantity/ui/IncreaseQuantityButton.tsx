import { IncreaseQuantityButtonProps } from "../model/increase-types";
import '../styles/increase-btn.scss';

function IncreaseQuantityButton({
  onClick,
  label,
  className = ''
}: IncreaseQuantityButtonProps): React.JSX.Element {
  const btnIncreaseQuantity = 'btn-increase-quantity'

  return (
    <button
      className={`${btnIncreaseQuantity} ${className}`}
      onClick={onClick}>
      {label}
    </button>
  );
}

export default IncreaseQuantityButton;