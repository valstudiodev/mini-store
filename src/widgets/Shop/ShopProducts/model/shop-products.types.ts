import { Product } from "@/entities/product/model/types";

export interface ShopProductsProps {
  products: Product[];
  className?: string;

  currentPage: number;
  onPageChange: (page: number) => void;
  totalPages: number;
}