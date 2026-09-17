import { useAppSelector } from "@/app/store/hooks";
import { selectCartSubtotal } from "@/entities/cart/model/cartSelector";
import '../styles/cart-total.scss';

interface CartTotalProps {
  className?: string;
}

function CartTotal({
  className = ''
}: CartTotalProps): React.JSX.Element {
  const cartTotal = 'cart-total'

  const subtotal = useAppSelector(selectCartSubtotal)

  return (
    <div className={`${cartTotal} ${className}`}>
      <h3 className={`${cartTotal}__title`}>Cart totals</h3>
      <div className={`${cartTotal}__inner`}>
        <div className={`${cartTotal}__subtotal`}>
          <div className={`${cartTotal}__subtotal-wrap`}>
            <span className={`${cartTotal}__subtotal-title`}>Subtotal</span>
            <span className={`${cartTotal}__subtotal-quantity`}>
              ${subtotal}
            </span>
          </div>
        </div>
        <div className={`${cartTotal}__total`}>
          <div className={`${cartTotal}__total-wrap`}>
            <span className={`${cartTotal}__total-title`}>Total</span>
            <span className={`${cartTotal}__total-quantity`}>
              ${subtotal}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartTotal;