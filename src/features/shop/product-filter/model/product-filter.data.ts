import { categoryOptions, ProductFilterConfig } from "./product-filter.types";

export const productFilterConfig: ProductFilterConfig[] = [
  {
    title: 'category',
    options: categoryOptions,
  },
  {
    title: 'tags',
    options: [
      'productFilters.options.white',
      'productFilters.options.cheap',
      'productFilters.options.mobile',
      'productFilters.options.modern',
    ]
  },
  {
    title: 'brands',
    options: [
      'productFilters.options.apple',
      'productFilters.options.samsung',
      'productFilters.options.green',
    ]
  },
  {
    title: 'filter by price',
    options: [
      'productFilters.options.lessThan100',
      '$100-$200',
      '$200-$300',
      '$300-$400',
      '$400-$500',
    ]
  }
]