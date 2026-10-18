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
  LazyPostEditPage,
  LazyProductEditPage,
  LazyProductPage,
  LazyShopPage
} from "./lazy-pages";
import { createBrowserRouter } from "react-router";
import MainLayout from "@/widgets/MainLayout/ui/MainLayout";
import ErrorPage from "@/pages/ErrorPage/ui/ErrorPage";
import { routeMap } from "./routeMap";
import ProtectedRoute from "@/widgets/Auth/ProtectedRoute/ui/ProtectedRoute";
import PageLoader from "@/shared/ui/PageLoader/ui/PageLoader";


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
          <Suspense fallback={<PageLoader duration={3000} />}>
            <LazyHomePage />
          </Suspense>
        ),
        meta: {
          isInMenu: true,
          title: 'navigation.home',
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
          <Suspense fallback={<PageLoader duration={3000} />}>
            <LazyAboutPage />
          </Suspense>
        ),
        meta: {
          isInMenu: true,
          title: 'navigation.about',
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
          <Suspense fallback={<PageLoader duration={3000} />}>
            <LazyPagesLayout />
          </Suspense>
        ),
        meta: {
          isInMenu: true,
          title: 'navigation.pages',
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
              <Suspense >
                <LazyShopPage />
              </Suspense>
              // fallback={<PageLoader duration={3000} />}
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
                <Suspense>
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
                <Suspense>
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
          <Suspense fallback={<PageLoader duration={3000} />}>
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
          <Suspense fallback={<PageLoader duration={3000} />}>
            <LazyBlogPage />
          </Suspense>
        ),
        meta: {
          isInMenu: true,
          title: 'navigation.blog',
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
          <Suspense fallback={<PageLoader duration={3000} />}>
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
        path: routeMap.postEdit.path,
        id: 'post-edit',
        element: (
          <Suspense fallback={<div className="text-center text-4xl">Loading POST EDIT...</div>}>
            <LazyPostEditPage />
          </Suspense>
        ),
        meta: {
          title: 'post-edit',
          breadcrumbs: true,
        },
        handle: {
          breadcrumb: 'Post-edit',
          title: 'Post-edit'
        }
      },
      {
        path: routeMap.contacts.path,
        id: 'contacts',
        element: (
          <Suspense fallback={<PageLoader duration={3000} />}>
            <LazyContactsPage />
          </Suspense>
        ),
        meta: {
          isInMenu: true,
          title: 'navigation.contacts',
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
          <Suspense fallback={<PageLoader duration={3000} />}>
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
          <Suspense fallback={<PageLoader duration={3000} />}>
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
          <Suspense fallback={<PageLoader duration={3000} />}>
            <LazyAdminDashboard />
          </Suspense>
        ),
      },
      {
        path: 'products',
        id: 'admin-products',
        element: (
          <Suspense fallback={<PageLoader duration={3000} />}>
            <LazyAdminProducts />
          </Suspense>
        ),
      },
      {
        path: 'posts',
        id: 'admin-posts',
        element: (
          <Suspense fallback={<PageLoader duration={3000} />}>
            <LazyAdminPosts />
          </Suspense>
        ),
      },
      {
        path: 'comments',
        id: 'admin-comments',
        element: (
          <Suspense fallback={<PageLoader duration={3000} />}>
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