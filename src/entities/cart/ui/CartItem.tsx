import { CartItemProps } from "../model/cartTypes";
import '../styles/cartItem.scss';
import DecreaseQuantityButton from "@/features/cart/decrease-quantity/ui/DecreaseQuantityButton";
import IncreaseQuantityButton from "@/features/cart/increase-quantity/ui/IncreaseQuantityButton";
import RemoveFromCartButton from "@/features/cart/remove-from-cart/ui/RemoveFromCartButton";
import { useAppDispatch } from "@/app/store/hooks";
import { decreaseQuantity, increaseQuantity } from "../model/cartSlice";
import QuantityDisplay from "@/features/cart/cart-item-quantity/ui/QuantityDisplay";

function CartItem({
  product,
  className
}: CartItemProps): React.JSX.Element {
  const cartItem = 'cart-item'

  const subtotal = product.price * product.quantity

  const dispatch = useAppDispatch()

  const handleDecrease = (): void => {
    dispatch(decreaseQuantity(product.id))
  }

  const handleIncrease = (): void => {
    dispatch(increaseQuantity(product.id))
  }

  return (
    <article className={`${cartItem} ${className}`}>
      <div className={`${cartItem}__content`}>
        <div className={`${cartItem}__img`}>
          <img src={product.imageUrl} alt={product.title} />
        </div>
        <div className={`${cartItem}__info`}>
          <h4 className={`${cartItem}__title`}>
            {product.title}
          </h4>
          <span className={`${cartItem}__price`}>
            ${product.price}
          </span>
        </div>
      </div>
      <div className={`${cartItem}__actions`}>
        <DecreaseQuantityButton
          onClick={handleDecrease}
          label="-"
          disabled={product.quantity === 1}
        />

        <QuantityDisplay quantity={product.quantity} />

        <IncreaseQuantityButton
          label="+"
          onClick={handleIncrease}
        />
      </div>
      <div className={`${cartItem}__subtotal`}>
        <span className={`${cartItem}__subtotal-value`}>${subtotal}</span>
        <RemoveFromCartButton
          product={product}
        />
      </div>
    </article>
  );
}

export default CartItem;




