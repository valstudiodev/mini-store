export interface Route<TArgs extends any[] = []> {
  path: string;
  navigate: (...args: TArgs) => string;
}

export function defineRoute<TArgs extends any[] = []>(
  path: string,
  navigate?: (...args: TArgs) => string
): Route<TArgs> {
  return {
    path,
    navigate: navigate ?? ((..._args: TArgs) => path),
  };
}

export const routeMap = {
  home: defineRoute('/'),
  about: defineRoute('/about'),
  pages: defineRoute('/pages'),
  shop: defineRoute('/pages/shop'),
  cart: defineRoute('/pages/cart'),
  checkout: defineRoute('/pages/checkout'),
  product: defineRoute('/product'),
  blog: defineRoute('/blog'),
  blogPost: defineRoute('/blog-post'),
  contacts: defineRoute('/contacts'),
  productEdit: defineRoute(
    '/products/edit/:id',
    (id: string | number) => `/products/edit/${id}`
  ),
  admin: defineRoute('/admin'),
} as const;