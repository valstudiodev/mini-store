import { Product } from "../model/types";
import { Star } from "lucide-react";
import '../styles/product-details.scss';

interface ProductDetailsProps {
  product: Product;
  className?: string;
}

function ProductDetails({
  product,
  className = ''
}: ProductDetailsProps): React.JSX.Element {
  const productDetails = 'product-details'

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
          <span className="rating-text">{product.rating}</span>
        </div>
        <span className={`${productDetails}__price`}>
          ${product.price}
        </span>
        <p className={`${product.description}__description`}>
          {product.description}
        </p>
        <div className={`${productDetails}__color`}>
          <h4 className={`${productDetails}__color-title`}>
            color
          </h4>
          <ul className={`${productDetails}__color-list`}>
            {product.colors.map((color) => (
              <li key={color}>
                <span className="color">{color}</span>
              </li>
            ))}
          </ul>
        </div>
        {product.sizes && (
          <div className={`${productDetails}__size`}>
            <h4 className={`${productDetails}__size-title`}>
              {product.sizes.length > 0 ? 'Size:' : ''}
            </h4>
            <ul className={`${productDetails}__size-list`}>
              {product.sizes.map((size) => (
                <li key={size}>
                  <span>{size}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <span className={`${productDetails}__stock`}>
          {product.stock} in stock
        </span>
        <span className={`${productDetails}__sku`}>
          SKU:{product.sku}
        </span>
        <ul className={`${productDetails}__category`}>
          Category:
          <li>{product.category}</li>
        </ul>
        <ul className={`${productDetails}__tags`}>
          Tags:
          {product.tags.map((tag) => (
            <li key={tag}>
              <span>{tag}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ProductDetails;