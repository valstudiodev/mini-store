import { ButtonBuyNowProps } from '../model/button-buy-now';
import '../styles/button-buy-now.scss';

function ButtonBuyNow({
  className = '',
  onClick,
  children
}: ButtonBuyNowProps): React.JSX.Element {
  const btnBuyNow = 'btn-buy-now'

  return (
    <button
      className={`${btnBuyNow} ${className}`}
      type='button'
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default ButtonBuyNow;