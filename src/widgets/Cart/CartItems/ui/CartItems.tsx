import { useAppSelector } from "@/app/store/hooks";
import { selectCartProducts } from "@/entities/cart/model/cartSelector";
import CartItem from "@/entities/cart/ui/CartItem";
import '../styles/cart-items.scss';
import { selectHasLoaded, selectProductError, selectProductsLoading } from "@/entities/product/model/productSelector";
import { SpinnerDefault } from "@/shared/ui";
import Message from "@/shared/ui/Message/ui/Message";
import CartEmpty from "../../CartEmpty/ui/CartEmpty";

interface CartItemsProps {
  className?: string;
}

function CartItems({
  className = ''
}: CartItemsProps): React.JSX.Element {
  const cartItems = 'cart-items'

  const cartProducts = useAppSelector(selectCartProducts)

  const productsLoading = useAppSelector(selectProductsLoading)
  const hasLoaded = useAppSelector(selectHasLoaded)
  const productError = useAppSelector(selectProductError)

  return (
    <div className={`${cartItems} ${className}`}>
      {productsLoading ? (
        <div className={`${cartItems}__loading`}>
          <SpinnerDefault size="large" />
        </div>

      ) : productError && !hasLoaded ? (
        <Message
          label={`Failed to load products: ${productError}`}
          variant='error' />
      ) : cartProducts.length === 0 ? (
        <CartEmpty />
      ) : (
        <ul className={`${cartItems}__list`}>
          {cartProducts.map((product) => (
            <li
              className={`${cartItems}__item`}
              key={product.id}
            >
              <CartItem product={product} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CartItems;