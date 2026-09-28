import { useEffect, useState } from 'react';
import usePostCreateForm from '../model/usePostCreateForm';
import '../styles/create-post.scss';
import Message from '@/shared/ui/Message/ui/Message';

interface CreatePostFormProps {
  className?: string;
}

function CreatePostForm({
  className = ''
}: CreatePostFormProps): React.JSX.Element {
  const createPostForm = 'create-post-form'

  const {
    formValues,
    handleChange,
    handleSubmit,
    postCreateStatus
  } = usePostCreateForm()

  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const loading = postCreateStatus === 'loading'
  const errorStatus = postCreateStatus === 'error'


  useEffect(() => {
    if (postCreateStatus !== 'success') return

    setShowSuccess(true)

    const timer = setTimeout(() => {
      setShowSuccess(false)
    }, 2000);

    return () => {
      clearTimeout(timer)
    }

  }, [postCreateStatus]);

  return (
    <form
      className={`${createPostForm} ${className}`}
      onSubmit={handleSubmit}
    >
      <label className={`${createPostForm}__field`}>
        <input
          type="text"
          name='title'
          value={formValues.title}
          onChange={handleChange}
          placeholder='Type a title...'
          className={`${createPostForm}__input`}
        />
      </label>

      <label className={`${createPostForm}__field`}>
        <input
          type="url"
          name='imageUrl'
          value={formValues.imageUrl}
          onChange={handleChange}
          placeholder='Add an image...'
          className={`${createPostForm}__input`}
        />
      </label>

      <label className={`${createPostForm}__field`}>
        <input
          type="date"
          name='date'
          value={formValues.date}
          onChange={handleChange}
          placeholder='Type a date...'
          className={`${createPostForm}__input`}
        />
      </label>

      <label className={`${createPostForm}__field`}>
        <select
          name='category'
          className={`${createPostForm}__select`}
        >
          <option value="">Select category</option>
          <option value="news">news</option>
          <option value="technology">technology</option>
          <option value="gadgets">gadgets</option>
          <option value="camera">camera</option>
        </select>
      </label>

      <button
        type='submit'
        className={`${createPostForm}__btn-submit`}
        disabled={loading}
      >
        {loading ? 'Adding...' : 'Add'}
      </button>

      {showSuccess && (
        <Message
          variant='success'
          label='Post created successfully!'
        />
      )}
    </form>
  );
}

export default CreatePostForm;