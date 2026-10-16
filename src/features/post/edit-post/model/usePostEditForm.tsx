import { useAppDispatch } from "@/app/store/hooks";
import { CreatePostPayload, Post, PostEditFormValues } from "@/entities/post/model/post-types";
import { updatePost } from "@/entities/post/model/postThunk";
import { RequestStatus } from "@/shared/types/common";
import { useEffect, useState } from "react";

interface UsePostEditFormProps {
  post: Post | null
}

const initialState: PostEditFormValues = {
  title: '',
  imageUrl: '',
  date: '',
  category: ''
}

function usePostEditForm({ post }: UsePostEditFormProps) {

  const [formValues, setFormValues] = useState<PostEditFormValues>(initialState);
  const [error, setError] = useState<string | null>(null);
  const [postEditStatus, setPostEditStatus] = useState<RequestStatus>('idle');

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (post) {
      setFormValues({
        title: post.title,
        imageUrl: post.imageUrl,
        date: post.date,
        category: post.category
      })
    }
  }, [post]);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const name = e.target.name

    const value = e.target.value

    setFormValues(
      (prev) => ({
        ...prev,
        [name]: value
      })
    )
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()

    setError(null)

    setPostEditStatus('loading')

    if (!post) {
      setError('Post not found.')
      setPostEditStatus('error')
      return
    }

    if (formValues.category === '') {
      setError('Please select a category')
      setPostEditStatus('error')
      return
    }

    setPostEditStatus('loading')

    try {
      const postData: CreatePostPayload = {
        title: formValues.title,
        imageUrl: formValues.imageUrl,
        date: formValues.date,
        category: formValues.category
      }

      await dispatch(
        updatePost({
          postId: post.id,
          postData: postData
        })
      ).unwrap()

      setPostEditStatus('success')
      setFormValues(initialState)

    } catch (error) {
      setPostEditStatus('error')
      setError(
        error instanceof Error
          ? error.message
          : typeof error === 'string'
            ? error
            : 'Failed to update post'
      )
    }
  }

  return {
    formValues,
    error,
    postEditStatus,
    handleChange,
    handleSubmit
  }
}

export default usePostEditForm