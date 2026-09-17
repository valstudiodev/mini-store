import { Suspense } from "react";
import {
  LazyAboutPage,
  LazyAdminPage,
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
            }
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
        }
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
        }
      },
      {
        path: routeMap.admin.path,
        id: 'admin',
        element: (
          <Suspense>
            <LazyAdminPage />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: (
          <Suspense>
            <LazyPage404 />
          </Suspense>
        ),
        mets: {
          id: 'page-404'
        }
      }
    ]
  }
]

const router = createBrowserRouter(routes, {
  basename: import.meta.env.BASE_URL.replace(/\/$/, ''),
})

export default router