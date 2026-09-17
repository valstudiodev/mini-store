import CartTotal from '../../CartTotal/ui/CartTotal';
import '../styles/cart-content.scss';
import CartItems from '../../CartItems/ui/CartItems';
import { useAppSelector } from '@/app/store/hooks';
import { selectCartProducts } from '@/entities/cart/model/cartSelector';
import CartActions from '../../CartActions/ui/CartActions';

function CartContent(): React.JSX.Element {
  const cartContent = 'cart-content'

  const cartProducts = useAppSelector(selectCartProducts)

  return (
    <div className={cartContent}>
      <CartItems />

      {cartProducts.length > 0 && (
        <>
          <CartTotal />
          <CartActions />
        </>
      )}
    </div>
  );
}

export default CartContent;