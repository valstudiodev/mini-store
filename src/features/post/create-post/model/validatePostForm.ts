import { PostFormErrors, PostFormValues } from "./create-post.types";


export function validatePostForm(values: PostFormValues) {

  const errors: PostFormErrors = {}

  if (values.title === '') {
    errors.title = 'Title is required'
  }

  if (values.imageUrl === '') {
    errors.imageUrl = 'Image is required'
  }

  if (values.date === '') {
    errors.date = 'Date is required'
  }

  if (values.category === '') {
    errors.category = 'Category is required'
  }

  return errors

}