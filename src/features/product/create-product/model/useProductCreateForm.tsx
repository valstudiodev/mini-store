import { useState } from "react";
import { ProductCreateStatus, ProductFormValues } from "./types";
import { CreateProductPayload } from "@/entities/product/model/types";
import { isProductColor } from "@/entities/product/model/isProductColor";
import { isProductSize } from "@/entities/product/model/isProductSize";
import { createProduct } from "../api/createProductService";

const initialState: ProductFormValues = {
  title: '',
  price: '',
  imageUrl: '',
  category: '',
  rating: '',
  description: '',
  stock: '',
  sku: '',
  tags: '',
  colors: '',
  sizes: '',
}

function useProductCreateForm() {

  const [formValues, setFormValues] = useState<ProductFormValues>(initialState);

  const [productCreateStatus, setProductCreateStatus] = useState<ProductCreateStatus>('idle');
  const [error, setError] = useState<string | null>(null);

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

    if (formValues.price.trim() === '' || formValues.rating.trim() === '' || formValues.stock.trim() === '') {
      setError('All numeric fields are required.')
      setProductCreateStatus('error')
      return
    }

    const price = Number(formValues.price)
    const rating = Number(formValues.rating)
    const stock = Number(formValues.stock)

    if (
      !Number.isFinite(price) ||
      !Number.isFinite(rating) ||
      !Number.isFinite(stock)
    ) {
      setError('Please enter valid numbers.')
      setProductCreateStatus('error')
      return
    }

    if (price <= 0) {
      setError('Price must be greater than zero.')
      setProductCreateStatus('error')
      return
    }

    if (stock < 0) {
      setError('Stock cannot be negative.')
      setProductCreateStatus('error')
      return
    }

    if (rating < 0 || rating > 5) {
      setError('Rating must be between 0 and 5.')
      setProductCreateStatus('error')
      return
    }

    try {
      const payload: CreateProductPayload = {
        title: formValues.title,
        price: Number(formValues.price),
        imageUrl: formValues.imageUrl,
        category: formValues.category,
        rating: Number(formValues.rating),
        description: formValues.description,
        stock: Number(formValues.stock),
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