import { useNavigate } from 'react-router';
import '../styles/postEditForm.scss';
import { useAppSelector } from '@/app/store/hooks';
import { selectPost } from '@/entities/post/model/postSelector';
import usePostEditForm from '../model/usePostEditForm';
import { useEffect, useState } from 'react';
import { routeMap } from '@/app/routes/routeMap';
import Message from '@/shared/ui/Message/ui/Message';

function PostEditForm(): React.JSX.Element {
  const postEditForm = 'post-edit-form'

  const navigate = useNavigate()

  const post = useAppSelector(selectPost)

  const {
    formValues,
    error,
    postEditStatus,
    handleChange,
    handleSubmit
  } = usePostEditForm({ post })

  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const loading = postEditStatus === 'loading'
  const errorStatus = postEditStatus === 'error'

  useEffect(() => {
    if (postEditStatus !== 'success') return

    setShowSuccess(true)

    const timer = setTimeout(() => {
      setShowSuccess(false)
      navigate(routeMap.home.path)
    }, 3000);

    return () => {
      clearTimeout(timer)
    }

  }, [postEditStatus, navigate]);

  return (
    <form
      onSubmit={handleSubmit}
      className={postEditForm}>
      <label className={`${postEditForm}__label`}>
        <input
          className={`${postEditForm}__input`}
          name='title'
          type="text"
          value={formValues.title}
          onChange={handleChange}
          placeholder='Edit the title...'
        />
      </label>

      <label className={`${postEditForm}__label`}>
        <input
          className={`${postEditForm}__input`}
          name='imageUrl'
          type="url"
          value={formValues.imageUrl}
          onChange={handleChange}
          placeholder='Edit the image...'
        />
      </label>

      <label className={`${postEditForm}__label`}>
        <input
          className={`${postEditForm}__input`}
          name='date'
          type="date"
          value={formValues.date}
          onChange={handleChange}
          placeholder='Edit the date...'
        />
      </label>

      <select
        className={`${postEditForm}__input`}
        name='category'
        value={formValues.category}
        onChange={handleChange}
      >
        <option value=''>Select category</option>
        <option value='news'>News</option>
        <option value='latest'>Latest</option>
        <option value='technology'>Technology</option>
        <option value='gadgets'>Gadgets</option>
        <option value='camera'>Camera</option>
      </select>

      <button
        type='submit'
        className={`${postEditForm}__btn`}
        disabled={loading}
      >
        {loading ? 'Updating' : 'Update'}
      </button>

      {errorStatus && error && (
        <p role='alert'>{error}</p>
      )}

      {showSuccess && (
        <Message
          variant='success'
          label='Post updated successfully!'
        />
      )}

    </form>
  );
}

export default PostEditForm;