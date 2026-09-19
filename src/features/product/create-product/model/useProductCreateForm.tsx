import { useState } from "react";
import { ProductCreateStatus, ProductFormValues } from "./types";
import { createProduct } from "@/entities/product/api/productServise";
import { CreateProductPayload } from "@/entities/product/model/types";
import { isProductColor } from "@/entities/product/model/isProductColor";
import { isProductSize } from "@/entities/product/model/isProductSize";


function useProductCreateForm() {

  const initialState: ProductFormValues = {
    title: '',
    price: 0,
    imageUrl: '',
    category: '',
    rating: 0,
    description: '',
    stock: 0,
    sku: '',
    tags: '',
    colors: '',
    sizes: '',
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

    if (formValues.category === '') {
      setError('Category is required.')
      setProductCreateStatus('error')
      return
    }

    const rawColors = formValues.colors
      .split(',')
      .map((item) => {
        return item.trim()
      }).filter((i) => i !== '')

    const hasInvalidColor = rawColors.some((color) => {
      return !isProductColor(color)
    })

    const colors = rawColors.filter(isProductColor)

    if (hasInvalidColor) {
      setError('Invalid color')
      setProductCreateStatus('error')
      return
    }

    const rawSizes = formValues.sizes
      .split(',')
      .map((item) => {
        return item.trim()
      }).filter((i) => i !== '')

    const hasInvalidSize = rawSizes.some((size) => {
      return !isProductSize(size)
    })

    const sizes = rawSizes.filter(isProductSize)

    if (hasInvalidSize) {
      setError('Invalid size')
      setProductCreateStatus('error')
      return
    }

    try {
      const payload: CreateProductPayload = {
        title: formValues.title,
        price: formValues.price,
        imageUrl: formValues.imageUrl,
        category: formValues.category,
        rating: formValues.rating,
        description: formValues.description,
        stock: formValues.stock,
        sku: formValues.sku,
        tags: formValues.tags.split(',').map(item => {
          return item.trim()
        }).filter((i) => i !== ''),
        colors: colors,
        sizes: sizes,
      }

      await createProduct(payload)

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