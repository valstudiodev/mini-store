import { Fragment } from "react/jsx-runtime";
import { ProductProps } from "../model/types";
import '../styles/product-card.scss';
import { routeMap } from "@/app/routes/routeMap";
import { } from "react";

function ProductCard({
  product,
  actions,
}: ProductProps): React.JSX.Element {
  const productCard = 'product-card'

  return (
    <article className={`${productCard}`}>
      <a
        href={`${routeMap.product.path}`}
        className={`${productCard}__image-wrap`}>
        <img
          className={`${productCard}__img`}
          src={product.imageUrl} alt={product.title} />
      </a>
      <div className={`${productCard}__content`}>
        <h4 className={`${productCard}__title`}>
          {product.title}
        </h4>
        <span className={`${productCard}__price`}>
          ${product.price}
        </span>
      </div>
      {actions?.map((action, index) => (
        <Fragment key={index}>{action}</Fragment>
      ))}
    </article>
  );
}

export default ProductCard;