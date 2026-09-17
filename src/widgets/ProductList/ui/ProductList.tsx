import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { selectHasLoaded, selectProductError, selectProductloading, selectProducts } from "@/entities/product/model/productSelector";
import { fetchProducts } from "@/entities/product/model/productThunk";
import ProductCard from "@/entities/product/ui/ProductCard";
import { useEffect } from "react";
import '../styles/product-list.scss';
import AddToCartButton from "@/features/cart/add-to-cart/ui/AddToCartBtn";
import { ProductCategoryProps } from "@/entities/product/model/types";

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
          <ProductCard
            product={product}
            actions={[
              <AddToCartButton
                className={`${productList}__btn-add`}
                product={product} />
            ]}
          />
        </li>
      ))}
    </ul>
  );
}

export default ProductList;