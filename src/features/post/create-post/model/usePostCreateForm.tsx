import { useState } from "react";
import { PostFormErrors, PostFormValues, RequestStatus } from "./create-post.types";
import { CreatePostPayload } from "@/entities/post/model/post-types";
import { createPost } from "../api/createPost";
import { validatePostForm } from "./validatePostForm";

const initialState: PostFormValues = {
  title: '',
  imageUrl: '',
  date: '',
  category: '',
}

function usePostCreateForm() {

  const [formValues, setFormValues] = useState<PostFormValues>(initialState);
  const [postCreateStatus, setPostCreateStatus] = useState<RequestStatus>('idle');
  const [errors, setErrors] = useState<PostFormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
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

    const validationErrors = validatePostForm(formValues)

    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      setPostCreateStatus('error')
      return
    }

    setPostCreateStatus('loading')

    if (formValues.category === '') {
      setPostCreateStatus('error')
      return
    }

    try {
      const payload: CreatePostPayload = {
        title: formValues.title,
        imageUrl: formValues.imageUrl,
        date: formValues.date,
        category: formValues.category
      }

      await createPost(payload)

      setPostCreateStatus('success')
      setErrors({})

      setFormValues(initialState)
    } catch (error) {
      setPostCreateStatus('error')
    }
  }

  return {
    formValues,
    handleChange,
    handleSubmit,
    postCreateStatus,
    errors
  }

}

export default usePostCreateForm;