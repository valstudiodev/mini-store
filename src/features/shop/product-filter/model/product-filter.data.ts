import { categoryOptions, ProductFilterConfig } from "./product-filter.types";

export const productFilterConfig: ProductFilterConfig[] = [
  {
    title: 'category',
    options: categoryOptions,
  },
  {
    title: 'tags',
    options: [
      'white',
      'cheap',
      'mobile',
      'modern',
    ]
  },
  {
    title: 'brands',
    options: [
      'apple',
      'samsung',
      'green',
    ]
  },
  {
    title: 'filter by price',
    options: [
      'lessThan100',
      '$100-$200',
      '$200-$300',
      '$300-$400',
      '$400-$500',
    ]
  }
]