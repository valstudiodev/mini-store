import { useAppSelector } from '@/app/store/hooks';
import useProductEditForm from '../model/useProductEditForm';
import '../styles/productEditForm.scss';
import { selectProduct } from '@/entities/product/model/productSelector';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { routeMap } from '@/app/routes/routeMap';
import Message from '@/shared/ui/Message/ui/Message';

function ProductEditForm(): React.JSX.Element {
  const formEdit = 'form-edit'

  const navigate = useNavigate()

  const product = useAppSelector(selectProduct)

  const {
    formValues,
    handleChange,
    handleSubmit,
    productEditStatus,
    error
  } = useProductEditForm({ product })


  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const loading = productEditStatus === 'loading'
  const errorStatus = productEditStatus === 'failed'

  useEffect(() => {
    if (productEditStatus !== 'success') return

    setShowSuccess(true)

    const timer = setTimeout(() => {
      setShowSuccess(false)
      navigate(routeMap.pages.path)
    }, 2000);

    return () => {
      clearTimeout(timer)
    }

  }, [productEditStatus, navigate]);


  return (
    <form
      className={formEdit}
      onSubmit={handleSubmit}
    >
      <label className={`${formEdit}__label`}>
        <input
          className={`${formEdit}__input border`}
          name='title'
          value={formValues.title}
          onChange={handleChange}
          type="text"
          placeholder='Edit title...'
        />
      </label>

      <label className={`${formEdit}__label`}>
        <input
          className={`${formEdit}__input border`}
          name='price'
          value={formValues.price}
          onChange={handleChange}
          type="number" />
      </label>

      <label className={`${formEdit}__label`}>
        <input
          className={`${formEdit}__input border`}
          name='imageUrl'
          value={formValues.imageUrl}
          onChange={handleChange}
          type="url"
          placeholder='Edit image url...'
        />
      </label>

      <label className={`${formEdit}__label`}>
        <input
          className={`${formEdit}__input border`}
          name='category'
          value={formValues.category}
          onChange={handleChange}
          type="text"
          placeholder='Edit category...'
        />
      </label>

      <label className={`${formEdit}__label`}>
        <input
          className={`${formEdit}__input border`}
          name='rating'
          value={formValues.rating}
          onChange={handleChange}
          type="number"
          placeholder='Edit rating...'
        />
      </label>

      <label className={`${formEdit}__label`}>
        <input
          className={`${formEdit}__input border`}
          name='description'
          value={formValues.description}
          onChange={handleChange}
          type="text"
          placeholder='Edit description...'
        />
      </label>

      <label className={`${formEdit}__label`}>
        <input
          className={`${formEdit}__input border`}
          name='stock'
          value={formValues.stock}
          onChange={handleChange}
          type="number"
          placeholder='Edit stock...'
        />
      </label>

      <label className={`${formEdit}__label`}>
        <input
          className={`${formEdit}__input border`}
          name='sku'
          value={formValues.sku}
          onChange={handleChange}
          type="text"
          placeholder='Edit sku...'
        />
      </label>

      <label className={`${formEdit}__label`}>
        <input
          className={`${formEdit}__input border`}
          name='tags'
          value={formValues.tags}
          onChange={handleChange}
          type="text"
          placeholder='Edit tags...'
        />
      </label>

      <label className={`${formEdit}__label`}>
        <input
          className={`${formEdit}__input border`}
          name='colors'
          value={formValues.colors}
          onChange={handleChange}
          type="text"
          placeholder='Edit colors...'
        />
      </label>

      <label className={`${formEdit}__label`}>
        <input
          className={`${formEdit}__input border`}
          name='sizes'
          value={formValues.sizes}
          onChange={handleChange}
          type="text"
          placeholder='Edit sizes...'
        />
      </label>

      <button
        type='submit'
        disabled={loading}
      >
        {loading ? 'Updating...' : 'Save'}
      </button>

      {errorStatus && (
        error
      )}

      {showSuccess && (
        <Message
          variant='success'
          label='Product updated successfully!' />
      )}

    </form>
  );
}

export default ProductEditForm;