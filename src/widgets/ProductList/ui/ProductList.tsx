import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { selectHasLoaded, selectProductError, selectProductloading, selectProducts } from "@/entities/product/model/productSelector";
import ProductCard from "@/entities/product/ui/ProductCard";
import '../styles/product-list.scss';
import AddToCartButton from "@/features/cart/add-to-cart/ui/AddToCartBtn";
import { ProductCategoryProps } from "@/entities/product/model/types";
import { addToCart } from "@/entities/cart/model/cartSlice";
import { deleteProduct } from "@/features/product/delete-product/model/delete-product";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Link } from "react-router";
import { routeMap } from "@/app/routes/routeMap";
import useRole from "@/shared/config/auth/useRole";
import { SpinnerDefault } from "@/shared/ui";
import DeleteButton from "@/features/product/delete-product/ui/DeleteButton";
import UpdateButton from "@/features/product/edit-product/ui/UpdateButton";


function ProductList({
  category
}: ProductCategoryProps): React.JSX.Element {
  const productList = 'product-list'

  const { hasRole } = useRole()

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

  if (productLoading) return <SpinnerDefault />

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
      <ul className={productList}>
        {filteredProducts.map((product) => (
          <li
            key={product.id}
            className={`${productList}__item`}>
            <SwiperSlide>
              <ProductCard
                product={product}
                actions={[
                  <AddToCartButton
                    className={`${productList}__btn-add`}
                    onClick={() => handleAddToCart(product.id)}
                  />,
                  <>
                    {hasRole('admin') && (
                      <div className='actions-wrap flex 
                        items-center justify-between gap-3'>
                        <DeleteButton
                          onClick={() => handleDelete(product.id)}
                        >
                          Delete
                        </DeleteButton>
                        {/* <Link
                          to={routeMap.productEdit.navigate(product.id)}
                        >
                          Edit
                        </Link> */}
                        <UpdateButton
                          to={routeMap.productEdit.navigate(product.id)}
                        >
                          Edit
                        </UpdateButton>
                      </div>
                    )}
                  </>
                ]}
              />
            </SwiperSlide>
          </li>
        ))}
      </ul>
    </Swiper>
  );
}

export default ProductList;