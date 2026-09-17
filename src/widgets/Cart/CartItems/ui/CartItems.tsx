import { useAppSelector } from "@/app/store/hooks";
import { selectCartProducts } from "@/entities/cart/model/cartSelector";
import CartItem from "@/entities/cart/ui/CartItem";
import '../styles/cart-items.scss';

interface CartItemsProps {
  className?: string;
}

function CartItems({
  className = ''
}: CartItemsProps): React.JSX.Element {
  const cartItems = 'cart-items'

  const cartProducts = useAppSelector(selectCartProducts)

  return (
    <div className={`${cartItems} ${className}`}>
      {cartProducts.length === 0 ? (
        <p className={`${cartItems}__text`}>Your cart is empty</p>
      ) : (
        <ul className={`${cartItems}__list`}>
          {cartProducts.map((product) => (
            <li
              className={`${cartItems}__item`}
              key={product.id}>
              <CartItem product={product} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CartItems;