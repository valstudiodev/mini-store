import { lazy } from "react";

export const LazyPagesLayout = lazy(() => import('@/widgets/PagesLayout/ui/PagesLayout'));
export const LazyHomePage = lazy(() => import('@/pages/HomePage/ui/HomePage'))
export const LazyPage404 = lazy(() => import('@/pages/Page404/ui/Page404'))
export const LazyErrorPage = lazy(() => import('@/pages/ErrorPage/ui/ErrorPage'))
export const LazyAboutPage = lazy(() => import('@/pages/AboutPage/ui/AboutPage'));
export const LazyBlogPage = lazy(() => import('@/pages/BlogPage/ui/BlogPage'));
export const LazyBlogPost = lazy(() => import('@/pages/BlogPostPage/ui/BlogPostPage'));
export const LazyCartPage = lazy(() => import('@/pages/CartPage/ui/CartPage'));
export const LazyCheckoutPage = lazy(() => import('@/pages/CheckoutPage/ui/CheckoutPage'));
export const LazyContactsPage = lazy(() => import('@/pages/Contacts/ui/ContactsPage'));
export const LazyProductPage = lazy(() => import('@/pages/ProductPage/ui/ProductPage'));
export const LazyShopFilter = lazy(() => import('@/pages/ShopPage/ui/ShopFilter'));
export const LazyShopPage = lazy(() => import('@/pages/ShopPage/ui/ShopPage'));


// admin
export const LazyAdminDashboard = lazy(() => import('@/pages/Admin/AdminDashboard/AdminDashboard'));
export const LazyAdminProducts = lazy(() => import('@/pages/Admin/AdminProducts/AdminProducts'));
export const LazyAdminPosts = lazy(() => import('@/pages/Admin/AdminPosts/AdminPosts'));
export const LazyAdminComments = lazy(() => import('@/pages/Admin/AdminComments/AdminComments'));