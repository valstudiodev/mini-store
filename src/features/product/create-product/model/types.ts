import { ProductCategoryType, ProductColor, ProductSize } from "@/entities/product/model/types";

// export interface CreateProductPayload {
//   title: string;
//   price: number;
//   imageUrl: string;
// }

// export interface FormValuesProps {
//   formValues: CreateProductPayload
// }

export interface ProductFormValues {
  title: string;
  price: number;
  imageUrl: string;
  category: ProductCategoryType | '';
  rating: number;
  description: string;
  stock: number;
  sku: string;
  tags: string;
  colors: string;
  sizes: string;
}

export type ProductCreateStatus =
  | 'idle'
  | 'loading'
  | 'success'
  | 'error'