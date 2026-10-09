import { Suspense } from "react";
import {
  LazyAboutPage,
  LazyAdminComments,
  LazyAdminDashboard,
  LazyAdminLayout,
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
  LazyProductEditPage,
  LazyProductPage,
  LazyShopPage
} from "./lazy-pages";
import { createBrowserRouter } from "react-router";
import MainLayout from "@/widgets/MainLayout/ui/MainLayout";
import ErrorPage from "@/pages/ErrorPage/ui/ErrorPage";
import { routeMap } from "./routeMap";
import { SpinnerDefault } from "@/shared/ui";
import ProtectedRoute from "@/widgets/Auth/ProtectedRoute/ui/ProtectedRoute";


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
          <Suspense fallback={<SpinnerDefault size="large" />}>
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
          <Suspense fallback={<SpinnerDefault size="large" />}>
            <LazyAboutPage />
          </Suspense>
        ),
        meta: {
          isInMenu: true,
          title: 'About',
          breadcrumbs: true,
        },
        handle: {
          breadcrumb: 'breadcrumbs.about',
          title: 'titles.about',
        }
      },
      {
        path: routeMap.pages.path,
        id: 'pages',
        element: (
          <Suspense fallback={<SpinnerDefault size="large" />}>
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
              <Suspense fallback={<SpinnerDefault size="large" />}>
                <LazyShopPage />
              </Suspense>
            ),
            meta: {
              isInMenu: true,
              title: 'Shop',
            },
            handle: {
              breadcrumb: 'breadcrumbs.shop',
              title: 'titles.shop',
            },
          },
          {
            path: routeMap.cart.path,
            id: 'cart',
            element: (
              <ProtectedRoute requiresAuth allowedRoles={['admin', 'user']}>
                <Suspense fallback={<SpinnerDefault size="large" />}>
                  <LazyCartPage />
                </Suspense>
              </ProtectedRoute>

            ),
            meta: {
              isInMenu: false,
              title: 'Cart',
            },
            handle: {
              breadcrumb: 'breadcrumbs.cart',
              title: 'titles.cart'
            }
          },
          {
            path: routeMap.checkout.path,
            id: 'checkout',
            element: (
              <ProtectedRoute requiresAuth allowedRoles={['user', 'admin']}>
                <Suspense fallback={<SpinnerDefault size="large" />}>
                  <LazyCheckoutPage />
                </Suspense>
              </ProtectedRoute>
            ),
            meta: {
              isInMenu: false,
              title: 'Checkout',
            },
            handle: {
              breadcrumb: 'breadcrumbs.checkout',
              title: 'titles.checkout'
            }
          }
        ]
      },
      {
        path: routeMap.product.path,
        id: 'product',
        element: (
          <Suspense fallback={<SpinnerDefault size="large" />}>
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
          <Suspense fallback={<SpinnerDefault size="large" />}>
            <LazyBlogPage />
          </Suspense>
        ),
        meta: {
          isInMenu: true,
          title: 'Blog',
          breadcrumbs: true,
        },
        handle: {
          breadcrumb: 'breadcrumbs.blog',
          title: 'titles.blog'
        }
      },
      {
        path: routeMap.blogPost.path,
        id: 'blog-post',
        element: (
          <Suspense fallback={<SpinnerDefault size="large" />}>
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
          <Suspense fallback={<SpinnerDefault size="large" />}>
            <LazyContactsPage />
          </Suspense>
        ),
        meta: {
          isInMenu: true,
          title: 'Contacts',
          breadcrumbs: true,
        },
        handle: {
          breadcrumb: 'breadcrumbs.contacts',
          title: 'titles.contacts'
        }
      },
      {
        path: routeMap.productEdit.path,
        id: 'product-edit',
        element: (
          <Suspense fallback={<SpinnerDefault size="large" />}>
            <LazyProductEditPage />
          </Suspense>
        ),
        meta: {
          isInMenu: false,
          title: 'Product-edit',
          breadcrumbs: true,
        },
        handle: {
          breadcrumb: 'Product-edit',
          title: 'Product-edit'
        }
      },
      {
        path: '*',
        element: (
          <Suspense fallback={<SpinnerDefault size="large" />}>
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
    element: (
      <ProtectedRoute requiresAuth allowedRoles={['admin']}>
        <Suspense>
          <LazyAdminLayout />
        </Suspense>
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        id: 'admin',
        element: (
          <Suspense fallback={<SpinnerDefault size="large" />}>
            <LazyAdminDashboard />
          </Suspense>
        ),
      },
      {
        path: 'products',
        id: 'admin-products',
        element: (
          <Suspense fallback={<SpinnerDefault size="large" />}>
            <LazyAdminProducts />
          </Suspense>
        ),
      },
      {
        path: 'posts',
        id: 'admin-posts',
        element: (
          <Suspense fallback={<SpinnerDefault size="large" />}>
            <LazyAdminPosts />
          </Suspense>
        ),
      },
      {
        path: 'comments',
        id: 'admin-comments',
        element: (
          <Suspense fallback={<SpinnerDefault size="large" />}>
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