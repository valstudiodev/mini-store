import AddToCartButton from '@/features/cart/add-to-cart/ui/AddToCartBtn';
import { ProductGridProps } from '../model/types';
import '../styles/product-grid.scss';
import ProductCard from './ProductCard';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { addToCart } from '@/entities/cart/model/cartSlice';
import { selectAuthUser } from '@/features/auth/model/authSelector';
import DeleteButton from '@/features/product/delete-product/ui/DeleteButton';
import UpdateButton from '@/features/product/edit-product/ui/UpdateButton';
import { routeMap } from '@/app/routes/routeMap';
import { deleteProduct } from '@/features/product/delete-product/model/delete-product';

function ProductGrid({
  products,
  className = '',
}: ProductGridProps): React.JSX.Element {
  const productGrid = 'product-grid'

  const dispatch = useAppDispatch()

  const user = useAppSelector(selectAuthUser)

  const isAdmin = user?.role === 'admin'
  const isAuthenticated = user !== null

  const handleAddToCart = (productId: string): void => {
    dispatch(addToCart({
      productId,
      quantity: 1,
    }))
  }

  const handleDelete = async (productId: string): Promise<void> => {

    try {
      await dispatch(deleteProduct(productId)).unwrap()
    } catch (error) {

    }
  }

  return (
    <div className={`${productGrid} ${className}`}>
      <ul className={`${productGrid}__list`}>
        {products.map((product) => (
          <li
            className={`${productGrid}__item`}
            key={product.id}
          >
            <ProductCard
              product={product}
              actions={[
                ...(isAuthenticated
                  ? [
                    < AddToCartButton
                      className={`${productGrid}__btn-add`}
                      onClick={() => handleAddToCart(product.id)}
                    />
                  ]
                  : []),

                ...(isAdmin
                  ? [
                    <div className='actions-wrap flex 
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
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductGrid;