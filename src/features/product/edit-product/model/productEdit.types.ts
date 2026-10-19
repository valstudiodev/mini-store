import { ProductCategoryType } from "@/entities/product/model/types";

export interface ProductEditFormValues {
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