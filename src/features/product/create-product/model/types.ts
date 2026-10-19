import { ProductCategoryType } from "@/entities/product/model/types";

export interface ProductFormValues {
  title: string;
  price: string;
  imageUrl: string;
  category: ProductCategoryType | '';
  rating: string;
  description: string;
  stock: string;
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