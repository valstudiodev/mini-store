import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { selectHasLoaded, selectProductError, selectProducts, selectProductsLoading } from "@/entities/product/model/productSelector";
import { ProductCard } from "@/entities";
import '../styles/product-list.scss';
import AddToCartButton from "@/features/cart/add-to-cart/ui/AddToCartBtn";
import { ProductCategoryProps } from "@/entities/product/model/types";
import { addToCart } from "@/entities/cart/model/cartSlice";
import { deleteProduct } from "@/features/product/delete-product/model/delete-product";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { routeMap } from "@/app/routes/routeMap";
import { DeleteButton, UpdateButton } from "@/features/product";
import { selectAuthUser } from "@/features/auth/model/authSelector";
import WarningMessage from "@/shared/ui/WarningMessage/ui/WarningMessage";
import { useState } from "react";
import { SpinnerDefault } from "@/shared/ui";


function ProductList({
  category
}: ProductCategoryProps): React.JSX.Element {
  const productList = 'product-list'

  const [error, setError] = useState<string | null>(null);

  const products = useAppSelector(selectProducts)
  const productsLoading = useAppSelector(selectProductsLoading)
  const productError = useAppSelector(selectProductError)
  const hasLoaded = useAppSelector(selectHasLoaded)
  const user = useAppSelector(selectAuthUser)

  const isAdmin = user?.role === 'admin'
  const isAuthenticated = user !== null

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

  if (productsLoading) return <SpinnerDefault size="large" />

  if (productError) {
    return (
      <div>
        {productError}
      </div>
    )
  }

  if (hasLoaded && filteredProducts.length === 0) {
    return <WarningMessage text="No products found." />
  }

  const handleDelete = async (productId: string): Promise<void> => {
    setError(null)

    try {
      await dispatch(deleteProduct(productId)).unwrap()
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message)
      } else {
        setError('Failed to delete a product.')
      }
    }
  }

  return (
    <Swiper
      pagination={{
        clickable: true
      }}

      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        900: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1100: {
          slidesPerView: 4,
          spaceBetween: 20,
        }
      }}
      modules={[Pagination, Autoplay]}
      className={`${productList}__swiper`}>
      <ul
        className={productList}>
        {filteredProducts.map((product) => (
          <li
            key={product.id}
            className={`${productList}__item`}>
            <SwiperSlide>
              <ProductCard
                product={product}
                actions={[
                  ...(isAuthenticated
                    ? [
                      <AddToCartButton
                        key='add-to-cart'
                        className={`${productList}__btn-add`}
                        onClick={() => handleAddToCart(product.id)}
                      />,
                    ]
                    : []),

                  ...(isAdmin
                    ? [
                      <div
                        key='admin-actions'
                        className='actions-wrap flex 
                        items-center justify-between gap-3'>
                        <DeleteButton
                          onClick={() => handleDelete(product.id)}
                        >
                          Delete
                        </DeleteButton>
                        <UpdateButton
                          to={routeMap.productEdit.navigate(product.id)}
                        >
                          Edit
                        </UpdateButton>
                      </div>
                    ]
                    : [])
                ]}
              />
            </SwiperSlide>
          </li>
        ))}
      </ul>
      {error && (
        <p role="alert">{error}</p>
      )}
    </Swiper >
  );
}

export default ProductList;