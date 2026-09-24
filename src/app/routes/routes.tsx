import { Suspense } from "react";
import {
  LazyAboutPage,
  LazyAdminComments,
  LazyAdminDashboard,
  LazyAdminPosts,
  LazyAdminProducts,
  LazyBlogPage,
  LazyBlogPost,
  LazyCartPage,
  LazyCheckoutPage,
  LazyContactsPage,
  LazyHomePage,
  LazyPage404,
  LazyPagesLayout,
  LazyProductPage,
  LazyShopPage
} from "./lazy-pages";
import { createBrowserRouter } from "react-router";
import MainLayout from "@/widgets/MainLayout/ui/MainLayout";
import ErrorPage from "@/pages/ErrorPage/ui/ErrorPage";
import { routeMap } from "./routeMap";
import { AdminLayout } from "@/widgets/Admin";


export const routes = [
  {
    path: '/',
    Component: MainLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        id: 'home-page',
        element: (
          <Suspense>
            <LazyHomePage />
          </Suspense>
        ),
        meta: {
          isInMenu: true,
          title: 'Home',
        },
        handle: {
          breadcrumb: 'Home',
          title: 'Home',
        }
      },
      {
        path: routeMap.about.path,
        id: 'about',
        element: (
          <Suspense>
            <LazyAboutPage />
          </Suspense>
        ),
        meta: {
          isInMenu: true,
          title: 'About',
          breadcrumbs: true,
        },
        handle: {
          breadcrumb: 'About',
          title: 'About',
        }
      },
      {
        path: routeMap.pages.path,
        id: 'pages',
        element: (
          <Suspense>
            <LazyPagesLayout />
          </Suspense>
        ),
        meta: {
          isInMenu: true,
          title: 'Pages',
          breadcrumbs: true,
        },
        handle: {
          breadcrumb: true,
          title: 'Pages'
        },
        children: [
          {
            index: true,
            id: 'shop',
            element: (
              <Suspense>
                <LazyShopPage />
              </Suspense>
            ),
            meta: {
              isInMenu: true,
              title: 'Shop',
            },
            handle: {
              breadcrumb: 'Shop',
              title: 'Shop',
            },
          },
          {
            path: routeMap.cart.path,
            id: 'cart',
            element: (
              <Suspense>
                <LazyCartPage />
              </Suspense>
            ),
            meta: {
              isInMenu: false,
              title: 'Cart',
            },
            handle: {
              breadcrumb: 'Cart',
              title: 'Cart'
            }
          },
          {
            path: routeMap.checkout.path,
            id: 'checkout',
            element: (
              <Suspense>
                <LazyCheckoutPage />
              </Suspense>
            ),
            meta: {
              isInMenu: false,
              title: 'Checkout'
            }
          }
        ]
      },
      {
        path: routeMap.product.path,
        id: 'product',
        element: (
          <Suspense>
            <LazyProductPage />
          </Suspense>
        ),
        meta: {
          isInMenu: false,
          title: 'Product',
          breadcrumbs: true,
        },
      },
      {
        path: routeMap.blog.path,
        id: 'blog',
        element: (
          <Suspense>
            <LazyBlogPage />
          </Suspense>
        ),
        meta: {
          isInMenu: true,
          title: 'Blog',
          breadcrumbs: true,
        },
        handle: {
          breadcrumb: 'Blog',
          title: 'Blog'
        }
      },
      {
        path: routeMap.blogPost.path,
        id: 'blog-post',
        element: (
          <Suspense>
            <LazyBlogPost />
          </Suspense>
        ),
        meta: {
          isInMenu: false,
          title: 'blog-post',
          breadcrumbs: true,
        }
      },
      {
        path: routeMap.contacts.path,
        id: 'contacts',
        element: (
          <Suspense>
            <LazyContactsPage />
          </Suspense>
        ),
        meta: {
          isInMenu: true,
          title: 'Contacts',
          breadcrumbs: true,
        },
        handle: {
          breadcrumb: 'Contacts',
          title: 'Contacts'
        }
      },
      {
        path: '*',
        element: (
          <Suspense>
            <LazyPage404 />
          </Suspense>
        ),
        meta: {
          id: 'page-404'
        }
      }
    ]
  },
  {
    path: 'admin',
    Component: AdminLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        id: 'admin',
        element: (
          <Suspense>
            <LazyAdminDashboard />
          </Suspense>
        ),
      },
      {
        path: 'products',
        id: 'admin-products',
        element: (
          <Suspense>
            <LazyAdminProducts />
          </Suspense>
        ),
      },
      {
        path: 'posts',
        id: 'admin-posts',
        element: (
          <Suspense>
            <LazyAdminPosts />
          </Suspense>
        ),
      },
      {
        path: 'comments',
        id: 'admin-comments',
        element: (
          <Suspense>
            <LazyAdminComments />
          </Suspense>
        ),
      }
    ]
  }
]

const router = createBrowserRouter(routes, {
  basename: import.meta.env.BASE_URL.replace(/\/$/, ''),
})

export default router