import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { selectHasLoaded, selectProductError, selectProductloading, selectProducts } from "@/entities/product/model/productSelector";
import ProductCard from "@/entities/product/ui/ProductCard";
import '../styles/product-list.scss';
import AddToCartButton from "@/features/cart/add-to-cart/ui/AddToCartBtn";
import { ProductCategoryProps } from "@/entities/product/model/types";
import { addToCart } from "@/entities/cart/model/cartSlice";
import { deleteProduct } from "@/entities/product/model/productThunk";

function ProductList({
  category
}: ProductCategoryProps): React.JSX.Element {
  const productList = 'product-list'

  const products = useAppSelector(selectProducts)
  const productLoading = useAppSelector(selectProductloading)
  const productError = useAppSelector(selectProductError)
  const hasLoaded = useAppSelector(selectHasLoaded)

  const dispatch = useAppDispatch()

  const handleAddToCart = (productId: string): void => {
    dispatch(addToCart({
      productId,
      quantity: 1,
    }))
  }

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

  if (hasLoaded && filteredProducts.length === 0) {
    return <div>Products is not found.</div>
  }

  const handleDelete = async (productId: string): Promise<void> => {

    try {
      await dispatch(deleteProduct(productId)).unwrap()
    } catch (error) {

    }
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
                onClick={() => handleAddToCart(product.id)}
              />,
              <button
                type="button"
                onClick={() => handleDelete(product.id)}
              >
                Delete
              </button>
            ]}
          />
        </li>
      ))}
    </ul>
  );
}

export default ProductList;