import { ProductCategoryType } from "@/entities/product/model/types";


export type CategoryFilterType = ProductCategoryType | 'all';

export interface ProductFilterProps {
  category: CategoryFilterType;
  tag: string;
  brand: string;
  price: string;

  onCategoryChange: (category: CategoryFilterType) => void;
  onTagChange: (value: string) => void;
  onBrandChange: (value: string) => void;
  onPriceChange: (value: string) => void;
}


export const categoryOptions: CategoryFilterType[] = [
  'all',
  'phones',
  'watches',
  'accessories',
  'tablets',
  'related'
];

export interface CategoryFilterConfig {
  title: 'category';
  options: CategoryFilterType[];
}

export interface TagsFilterConfig {
  title: 'tags';
  options: string[];
}

export interface BrandsFilterConfig {
  title: 'brands';
  options: string[];
}

export interface PriceFilterConfig {
  title: 'filter by price';
  options: string[];
}

export type ProductFilterConfig =
  | CategoryFilterConfig
  | TagsFilterConfig
  | BrandsFilterConfig
  | PriceFilterConfig;


