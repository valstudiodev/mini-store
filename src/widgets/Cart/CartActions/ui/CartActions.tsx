import LinkButton from '@/shared/ui/LinkButton/ui/LInkButton';
import '../styles/cart-actions.scss';
import { routeMap } from '@/app/routes/routeMap';
import { Link } from 'react-router';

interface CartActionsProps {
  className?: string;
}

function CartActions({
  className = ''
}: CartActionsProps): React.JSX.Element {
  const cartActions = 'cart-actions'

  return (
    <div className={`${cartActions} ${className}`}>
      <LinkButton
        href='/'
        variant='primary'
        disabled={true}
        className={`${cartActions}__btn`}
      >
        Update cart
      </LinkButton>

      <LinkButton
        href={`${routeMap.pages.path}`}
        variant='primary'
        className={`${cartActions}__btn`}
      >
        Continue shopping
      </LinkButton>

      {/* <LinkButton
        href={`${routeMap.checkout.path}`}
        variant='primary'
        className={`${cartActions}__btn`}
      >
        Proceed to checkout
      </LinkButton> */}
      <Link to='/pages/checkout'>
        Proceed to checkout
      </Link>
    </div>
  );
}

export default CartActions;