import { DecreaseQuantityButtonProps } from "../model/decrease-types";
import '../styles/decrease-btn.scss';

function DecreaseQuantityButton({
  onClick,
  label,
  className = '',
  disabled
}: DecreaseQuantityButtonProps): React.JSX.Element {
  const btnDecreaseQuantity = 'btn-decrease-quantity'

  return (
    <button
      className={`${btnDecreaseQuantity} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

export default DecreaseQuantityButton;