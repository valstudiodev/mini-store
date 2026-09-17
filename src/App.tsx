import { RouterProvider } from "react-router";
import router from "./app/routes/routes";
import { useInputDetection } from "./app/inputDetection/useInputDetection";
import { useEffect } from "react";
import { getProductById, getProducts } from "@/entities/product/api/productServise";
import ToastProvider from "./shared/ui/Toast/model/ToastProvider";
import { Toast } from "./shared/ui";

function App(): React.JSX.Element {

  useInputDetection()

  // useEffect(() => {
  //   const testGetProducts = async (): Promise<void> => {
  //     try {
  //       const products = getProducts()

  //       console.log('Products from firebase:', products);
  //       console.log('Products count:', (await products).length);

  //     } catch (error) {
  //       console.error('Failed to get products from Firebase:', error)
  //     }
  //   }
  //   testGetProducts()

  // }, []);

  // useEffect(() => {
  //   const testGetProducts = async (): Promise<void> => {
  //     try {
  //       const product = await getProductById('airpods-4')
  //       const missingProduct = await getProductById('does-not-exist')

  //       console.log('Missing product:', missingProduct)

  //       console.log('Product from Firebase:', product)

  //     } catch (error) {
  //       console.error('Failed to get products from Firebase:', error)
  //     }
  //   }
  //   testGetProducts()

  // }, []);

  return (
    <ToastProvider>
      <RouterProvider router={router} />
      <Toast />
    </ToastProvider>
  )
}

export default App;