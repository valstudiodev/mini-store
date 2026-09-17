export type ProductCategoryType =
  | 'mobile'
  | 'smart-watches'

export interface Product {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  category: ProductCategoryType;
}

export interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
  hasLoaded: boolean;
}

export interface ProductProps {
  product: Product;
  actions?: React.ReactElement[];
}

export interface CreateProductPayload {
  title: string;
  price: number;
  imageUrl: string;
}

export interface ProductListProps {
  products: Product[]
}

export interface ProductCategoryProps {
  category: ProductCategoryType
}

export type RequestStatus =
  | 'idle'
  | 'success'
  | 'loading'
  | 'failed'