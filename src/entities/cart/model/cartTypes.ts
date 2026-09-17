import { Product } from "@/entities/product/model/types";


export interface CartItem {
  productId: string;
  quantity: number;
}

export interface CartItemProps {
  product: CartProduct;
  className?: string;
}

export interface CartProduct extends Product {
  quantity: number
}