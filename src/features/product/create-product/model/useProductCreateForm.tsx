import { useState } from "react";
import { ProductCreateStatus, ProductFormValues } from "./types";
import { createProduct } from "@/entities/product/api/productServise";


function useProductCreateForm() {

  const initialState: ProductFormValues = {
    title: '',
    price: 0,
    imageUrl: '',
  }

  const [formValues, setFormValues] = useState<ProductFormValues>(initialState);

  const [productCreateStatus, setProductCreateStatus] = useState<ProductCreateStatus>('idle');
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const name = e.target.name

    const value = name === 'price' ? Number(e.target.value) : e.target.value

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
    setProductCreateStatus('loading')

    try {
      await createProduct(formValues)

      setProductCreateStatus('success')

      setFormValues(initialState)
    } catch (error) {
      setProductCreateStatus('error')
      if (error instanceof Error) {
        setError(error.message)
      } else {
        setError('Failed to create a product.')
      }
    }
  }

  return {
    formValues,
    handleChange,
    handleSubmit,
    productCreateStatus,
    error
  }
}

export default useProductCreateForm;