import { useAppSelector } from "@/app/store/hooks";
import { selectHasLoaded, selectProductError, selectProductloading, selectProducts } from "@/entities/product/model/productSelector";
import ProductCard from "@/entities/product/ui/ProductCard";
import '../styles/product-list.scss';
import AddToCartButton from "@/features/cart/add-to-cart/ui/AddToCartBtn";
import { ProductCategoryProps } from "@/entities/product/model/types";
import LinkButton from "@/shared/ui/LinkButton/ui/LInkButton";
import { routeMap } from "@/app/routes/routeMap";
import { Link } from "react-router";

function ProductList({
  category
}: ProductCategoryProps): React.JSX.Element {
  const productList = 'product-list'

  const products = useAppSelector(selectProducts)
  const productLoading = useAppSelector(selectProductloading)
  const productError = useAppSelector(selectProductError)
  const hasLoaded = useAppSelector(selectHasLoaded)


  const filteredProducts = products.filter(
    (product) => product.category === category
  )

  if (productLoading) return <div>Loading...</div>

  if (productError) {
    return (
      <div>
        {productError}
      </div>
    )
  }

  if (hasLoaded && products.length === 0) {
    return <div>Products is not found.</div>
  }


  return (
    <ul className={productList}>
      {filteredProducts.map((product) => (
        <li
          key={product.id}
          className={`${productList}__item`}
        >
          <Link
            className={`${productList}__link`}
            to={`${routeMap.product.path}`}
          >
            <ProductCard
              product={product}
              actions={[
                <AddToCartButton
                  className={`${productList}__btn-add`}
                  product={product} />
              ]}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default ProductList;