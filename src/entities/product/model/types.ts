export type ProductCategoryType =
  | 'phones'
  | 'watches'
  | 'accessories'
  | 'tablets'

export interface Product {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  category: ProductCategoryType;
  rating: number;
  description: string;
  stock: number;
  sku: string;
  tags: string[];
  colors: ProductColor[];
  sizes: ProductSize[];
  brand?: string;
}

export type ProductColor =
  | 'black'
  | 'white'
  | 'green'
  | 'orange'

export type ProductSize =
  | 'XL'
  | 'L'
  | 'M'
  | 'S'


export interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
  hasLoaded: boolean;
}

export interface ProductCardProps {
  product: Product;
  actions?: React.ReactElement[];
}

export interface CreateProductPayload {
  title: string;
  price: number;
  imageUrl: string;
  category: ProductCategoryType;
  rating: number;
  description: string;
  stock: number;
  sku: string;
  tags: string[];
  colors: ProductColor[];
  sizes: ProductSize[];
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

export interface ProductGridProps {
  products: Product[];
  className?: string;
}

