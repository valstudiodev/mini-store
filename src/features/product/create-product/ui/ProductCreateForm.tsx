import useToast from '@/shared/ui/Toast/model/useToast';
import useProductCreateForm from '../model/useProductCreateForm';
import '../styles/productCreateForm.scss';
import { useEffect, useState } from 'react';
import Message from '@/shared/ui/Message/ui/Message';

function ProductCreateForm(): React.JSX.Element {
  const clCreateForm = 'create-form'

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
    <form
      className={clCreateForm}
      onSubmit={handleSubmit}
    >
      <label>
        <input
          name='title'
          type="text"
          value={formValues.title}
          onChange={handleChange}
          placeholder='Add title...'
        />
      </label>

      <label>
        <input
          name='price'
          type="number"
          value={formValues.price}
          onChange={handleChange}
          placeholder='Add price...'
        />
      </label>

      <label>
        <input
          name='imageUrl'
          type="url"
          value={formValues.imageUrl}
          onChange={handleChange}
          placeholder='Add an image...'
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
      >
        {loading ? 'Adding...' : 'Add'}
      </button>
    </form>
  );
}

export default ProductCreateForm;