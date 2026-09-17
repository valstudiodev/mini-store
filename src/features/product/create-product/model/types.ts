export interface CreateProductPayload {
  title: string;
  price: number;
  imageUrl: string;
}

export interface FormValuesProps {
  formValues: CreateProductPayload
}

export interface ProductFormValues {
  title: string;
  price: number;
  imageUrl: string;
}

export type ProductCreateStatus =
  | 'idle'
  | 'loading'
  | 'success'
  | 'error'