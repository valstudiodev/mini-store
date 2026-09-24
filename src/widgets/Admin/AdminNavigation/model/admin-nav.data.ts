import { routeMap } from "@/app/routes/routeMap"


interface LinksNavigation {
  title: string;
  id: string;
  path?: string;
}

export const linksNavigations: LinksNavigation[] = [
  {
    title: 'products',
    id: 'admin-products',
    path: routeMap.adminProducts.path
  },
  {
    title: 'posts',
    id: 'admin-posts',
    path: routeMap.adminPosts.path,
  },
  {
    title: 'comments',
    id: 'admin-comments',
    path: routeMap.adminComments.path
  }
]