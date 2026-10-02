import useToast from '@/shared/ui/Toast/model/useToast';
import useProductCreateForm from '../model/useProductCreateForm';
import '../styles/productCreateForm.scss';
import { useEffect, useState } from 'react';
import Message from '@/shared/ui/Message/ui/Message';
import usePermissions from '@/shared/config/auth/usePermissions';

function ProductCreateForm(): React.JSX.Element {
  const clCreateForm = 'create-form'

  const { can } = usePermissions()

  const {
    formValues,
    handleChange,
    handleSubmit,
    productCreateStatus,
    error
  } = useProductCreateForm()

  const { dispatch } = useToast()

  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const loading = productCreateStatus === 'loading'
  const errorStatus = productCreateStatus === 'error'

  if (can('product.create') === false) {

  }


  useEffect(() => {
    if (productCreateStatus === 'success') {

      dispatch({
        type: 'SHOW_TOAST',
        payload: {
          type: 'success',
          message: 'Product created successfully!'
        }
      })
    }
  }, [productCreateStatus, dispatch]);

  useEffect(() => {
    if (productCreateStatus !== 'success') return

    setShowSuccess(true)

    const timer = setTimeout(() => {
      setShowSuccess(false)
    }, 2000);

    return () => {
      clearTimeout(timer)
    }
  }, [productCreateStatus]);

  return (

    <>
      {can('product.create') && (
        <form
          className={clCreateForm}
          onSubmit={handleSubmit}
        >
          <label className={`${clCreateForm}__field`}>
            <input
              name='title'
              type="text"
              value={formValues.title}
              onChange={handleChange}
              placeholder='Add title...'
              className={`${clCreateForm}__input`}
            />
          </label>

          <label className={`${clCreateForm}__field`}>
            <input
              name='price'
              type="number"
              value={formValues.price}
              onChange={handleChange}
              placeholder='Add price...'
              className={`${clCreateForm}__input`}
            />
          </label>

          <label className={`${clCreateForm}__field`}>
            <input
              name='imageUrl'
              type="url"
              value={formValues.imageUrl}
              onChange={handleChange}
              placeholder='Add an image...'
              className={`${clCreateForm}__input`}
            />
          </label>

          <label className={`${clCreateForm}__field`}>
            <input
              name='category'
              type='text'
              value={formValues.category}
              onChange={handleChange}
              placeholder='Type a category...'
              className={`${clCreateForm}__input`}
            />
          </label>

          <label className={`${clCreateForm}__field`}>
            <input
              name='rating'
              type='number'
              value={formValues.rating}
              onChange={handleChange}
              placeholder='Type rating...'
              className={`${clCreateForm}__input`}
            />
          </label>

          <label className={`${clCreateForm}__field`}>
            <input
              name='description'
              type='text'
              value={formValues.description}
              onChange={handleChange}
              placeholder='Type a description...'
              className={`${clCreateForm}__input`}
            />
          </label>

          <label className={`${clCreateForm}__field`}>
            <input
              name='stock'
              type='number'
              value={formValues.stock}
              onChange={handleChange}
              placeholder='Type a stock...'
              className={`${clCreateForm}__input`}
            />
          </label>

          <label className={`${clCreateForm}__field`}>
            <input
              name='sku'
              type='text'
              value={formValues.sku}
              onChange={handleChange}
              placeholder='Type a SKU...'
              className={`${clCreateForm}__input`}
            />
          </label>

          <label className={`${clCreateForm}__field`}>
            <input
              name='tags'
              type='text'
              value={formValues.tags}
              onChange={handleChange}
              placeholder='Type tags...'
              className={`${clCreateForm}__input`}
            />
          </label>

          <label className={`${clCreateForm}__field`}>
            <input
              name='colors'
              type='text'
              value={formValues.colors}
              onChange={handleChange}
              placeholder='Type colors...'
              className={`${clCreateForm}__input`}
            />
          </label>

          <label className={`${clCreateForm}__field`}>
            <input
              name='sizes'
              type='text'
              value={formValues.sizes}
              onChange={handleChange}
              placeholder='Type sizes...'
              className={`${clCreateForm}__input`}
            />
          </label>

          {errorStatus && (
            error
          )}

          {showSuccess && (
            <Message
              variant='success'
              label='Product created successfully!' />
          )}

          <button
            type='submit'
            disabled={loading}
            className={`${clCreateForm}__btn-add`}
          >
            {loading ? 'Adding...' : 'Add'}
          </button>
        </form>
      )}
    </>

  );
}

export default ProductCreateForm;