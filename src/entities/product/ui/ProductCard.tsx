import { Fragment } from "react/jsx-runtime";
import { ProductCardProps } from "../model/types";
import '../styles/product-card.scss';
import { routeMap } from "@/app/routes/routeMap";
import { } from "react";
import { Link } from "react-router";

function ProductCard({
  product,
  actions,
}: ProductCardProps): React.JSX.Element {
  const productCard = 'product-card'

  return (
    <article className={`${productCard}`}>
      <Link
        to={`${routeMap.product.navigate(product.id)}`}
        className={`${productCard}__link`}>
        <div className={`${productCard}__image-wrap`}>
          <img
            className={`${productCard}__img`}
            src={product.imageUrl} alt={product.title} />
        </div>
        <div className={`${productCard}__content`}>
          <h4 className={`${productCard}__title`}>
            {product.title}
          </h4>
          <span className={`${productCard}__price`}>
            ${product.price}
          </span>
        </div>
      </Link>
      {actions?.map((action, index) => (
        <Fragment key={index}>{action}</Fragment>
      ))}
    </article>
  );
}

export default ProductCard;