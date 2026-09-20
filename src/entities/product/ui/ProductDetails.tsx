import { Product } from "../model/types";
import { Star } from "lucide-react";
import '../styles/product-details.scss';
import { DecreaseQuantityButton, IncreaseQuantityButton } from "@/features/cart";
import { useState } from "react";
import { useAppDispatch } from "@/app/store/hooks";
import QuantityDisplay from "@/features/cart/cart-item-quantity/ui/QuantityDisplay";
import { addToCart } from "@/entities/cart/model/cartSlice";
import AddToCartButton from "@/features/cart/add-to-cart/ui/AddToCartBtn";
import { useNavigate } from "react-router";
import { routeMap } from "@/app/routes/routeMap";
import ButtonBuyNow from "@/features/cart/btn-buy-now/ui/ButtonBuyNow";

interface ProductDetailsProps {
  product: Product;
  className?: string;
}

function ProductDetails({
  product,
  className = ''
}: ProductDetailsProps): React.JSX.Element {
  const productDetails = 'product-details'
  const tag = 'tags'
  const category = 'category'
  const size = 'size'
  const color = 'color'
  const actions = 'actions'

  const colors = product.colors ?? []
  const sizes = product.sizes ?? []
  const tags = product.tags ?? []

  const [quantity, setQuantity] = useState<number>(1);

  const dispatch = useAppDispatch()

  const navigate = useNavigate()

  const handleAddToCart = (): void => {
    dispatch(addToCart({
      productId: product.id,
      quantity: quantity
    }))
  }

  const handleBuyNow = (): void => {
    dispatch(addToCart({
      productId: product.id,
      quantity: quantity
    }))

    navigate(`${routeMap.cart.path}`)
  }

  const handleDecrease = (): void => {
    if (quantity > 1) {
      setQuantity(
        (prev) => prev - 1
      )
    }
  }

  const handleIncrease = (): void => {
    setQuantity(
      (prev) => prev + 1
    )
  }

  return (
    <article className={`${productDetails} ${className}`}>
      <div className={`${productDetails}__image`}>
        <img src={product.imageUrl} alt={product.title} />
      </div>
      <div className={`${productDetails}__content`}>
        <h2 className={`${productDetails}__title`}>
          {product.title}
        </h2>

        <div className={`${productDetails}__rating`}>
          <span className="rating-icon"><Star size={17} /></span>
          <span className="rating-text">{product.rating ?? 0}</span>
        </div>

        <span className={`${productDetails}__price`}>
          ${product.price.toFixed(2)}
        </span>

        <p className={`${productDetails}__description`}>
          {product.description}
        </p>

        {colors.length > 0 && (
          <div className={`${productDetails}__color ${color}`}>
            <h4 className={`${color}__title`}>
              color
            </h4>
            <ul className={`${color}__list`}>
              {colors.map((c) => (
                <li
                  className={`${c}__item`}
                  key={c}>
                  <span className="color">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {sizes.length > 0 && (
          <div className={`${productDetails}__size ${size}`}>
            <h4 className={`${size}__title`}>
              {(sizes ?? []).length > 0 ? 'Size:' : ''}
            </h4>
            <ul className={`${size}__list`}>
              {sizes.map((s) => (
                <li
                  className={`${size}__item`}
                  key={s}>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className={`${productDetails}__stock`}>
          {product.stock > 0 ? (
            <span>
              {product.stock} in stock
            </span>
          ) : (
            <span>Out of stock</span>
          )}
        </div>

        <div className={`${productDetails}__actions ${actions}`}>
          <DecreaseQuantityButton
            onClick={handleDecrease}
            className={`${actions}__btn-decrease`}
            label="-"
            disabled={quantity === 1}
          />
          <QuantityDisplay quantity={quantity} />
          <IncreaseQuantityButton
            onClick={handleIncrease}
            className={`${actions}__btn-increase`}
            label="+"
          />
        </div>

        <div className={`${productDetails}__buttons`}>
          <ButtonBuyNow
            className={`${productDetails}__btn-buy-now`}
            onClick={handleBuyNow}
          >
            Buy now
          </ButtonBuyNow>
          <AddToCartButton
            onClick={handleAddToCart}
            showIcon={false}
            className={`${productDetails}__btn-add`}
          />
        </div>

        {product.sku && (
          <span className={`${productDetails}__sku`}>
            SKU:{product.sku}
          </span>
        )}

        {product.category && (
          <div className={`${productDetails}__category ${category}`}>
            <h4 className={`${category}__title`}>Category:</h4>
            <ul className={`${category}__list`}>
              <li className={`${category}__item`}>{product.category}</li>
            </ul>
          </div>
        )}

        {tags.length > 0 && (
          <div className={`${productDetails}__tags ${tag}`}>
            <h4 className={`${tag}__title`}>Tags:</h4>
            <ul className={`${tag}__list`}>
              {tags.map((t) => (
                <li
                  className={`${tag}__item`}
                  key={t}>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

      </div>
    </article >
  );
}

export default ProductDetails;