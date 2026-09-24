import { RouterProvider } from "react-router";
import router from "./app/routes/routes";
import { useInputDetection } from "./app/inputDetection/useInputDetection";
import ToastProvider from "./shared/ui/Toast/model/ToastProvider";
import { Toast } from "./shared/ui";
import { useAppDispatch, useAppSelector } from "./app/store/hooks";
import { selectHasLoaded } from "./entities/product/model/productSelector";
import { useEffect } from "react";
import { fetchProducts } from "./entities/product/model/productThunk";

function App(): React.JSX.Element {

  useInputDetection()


  const dispatch = useAppDispatch()

  const hasLoaded = useAppSelector(selectHasLoaded)

  useEffect(() => {
    if (!hasLoaded) {
      dispatch(fetchProducts())
    }
  }, [dispatch, hasLoaded]);

  return (
    <ToastProvider>
      <RouterProvider router={router} />
      <Toast />
    </ToastProvider>
  )
}

export default App;