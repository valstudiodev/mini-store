import { ProductCategoryType } from "@/entities/product/model/types";

export interface ProductEditFormValues {
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