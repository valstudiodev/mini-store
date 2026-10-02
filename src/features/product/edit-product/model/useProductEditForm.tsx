import { useEffect, useState } from "react";
import { ProductEditFormValues } from "./productEdit.types";
import { CreateProductPayload, Product, RequestStatus } from "@/entities/product/model/types";
import { isProductColor } from "@/entities/product/model/isProductColor";
import { isProductSize } from "@/entities/product/model/isProductSize";
import { useAppDispatch } from "@/app/store/hooks";
import { updateProduct } from "./updateProductThunk";

interface UseProductEditFormProps {
  product: Product | null;
}

function useProductEditForm({
  product,
}: UseProductEditFormProps) {

  const initialState: ProductEditFormValues = {
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

  const [formValues, setFormValues] = useState<ProductEditFormValues>(initialState);
  const [error, setError] = useState<string | null>(null);
  const [productEditStatus, setProductEditStatus] = useState<RequestStatus>('idle');

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (product) {
      setFormValues({
        title: product.title,
        price: product.price,
        imageUrl: product.imageUrl,
        category: product.category,
        rating: product.rating,
        description: product.description,
        stock: product.stock,
        sku: product.sku,
        tags: product.tags.join(', '),
        colors: product.colors.join(', '),
        sizes: product.sizes.join(', '),
      })
    }
  }, [product]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const name = e.target.name

    const value = name === 'price' || name === 'rating' || name === 'stock' ? Number(e.target.value) : e.target.value

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
    setProductEditStatus('loading')

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
      setProductEditStatus('failed')
      return
    }

    const rawSizes = formValues.sizes
      .split(',')
      .map(i => {
        return i.trim()
      }).filter((item) => item !== '')

    const hasInvalidSize = rawSizes.some((size) => {
      return !isProductSize(size)
    })

    const sizes = rawSizes.filter(isProductSize)

    if (hasInvalidSize) {
      setError('Invalid size')
      setProductEditStatus('failed')
      return
    }

    const category = formValues.category
    if (category === '') {
      setError('Invalid category')
      setProductEditStatus('failed')
      return
    }

    if (product === null) {
      setError('Failed to fetch product')
      setProductEditStatus('failed')
      return
    }

    try {
      const productData: CreateProductPayload = {
        title: formValues.title,
        price: formValues.price,
        imageUrl: formValues.imageUrl,
        category: category,
        rating: formValues.rating,
        description: formValues.description,
        stock: formValues.stock,
        sku: formValues.sku,
        tags: formValues.tags.split(',').map(item => {
          return item.trim()
        }).filter(i => i !== ''),
        colors: colors,
        sizes: sizes,
      }

      await dispatch(
        updateProduct({
          productId: product.id,
          productData: productData
        })
      ).unwrap()

      setProductEditStatus('success')
      setFormValues(initialState)

    } catch (error) {
      setProductEditStatus('failed')
      if (error instanceof Error) {
        setError(error.message)
      } else {
        setError('Failed to update a product')
      }
    }

  }

  return {
    formValues,
    handleChange,
    handleSubmit,
    productEditStatus,
    error
  }
}

export default useProductEditForm;