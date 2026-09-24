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
  blog: defineRoute('/blog'),
  blogPost: defineRoute('/blog-post'),
  contacts: defineRoute('/contacts'),
  product: defineRoute(
    '/product/:id',
    (id: string | number) => `/product/${id}`
  ),
  productEdit: defineRoute(
    '/products/edit/:id',
    (id: string | number) => `/products/edit/${id}`
  ),
  // admin
  admin: defineRoute('/admin'),
  adminProducts: defineRoute('/admin/products'),
  adminPosts: defineRoute('/admin/posts'),
  adminComments: defineRoute('/admin/comments'),
} as const;