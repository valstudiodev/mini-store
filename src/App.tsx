import { RouterProvider } from "react-router";
import router from "./app/routes/routes";
import { useInputDetection } from "./app/inputDetection/useInputDetection";
import ToastProvider from "./shared/ui/Toast/model/ToastProvider";
import { Toast } from "./shared/ui";

function App(): React.JSX.Element {

  useInputDetection()

  return (
    <ToastProvider>
      <RouterProvider router={router} />
      <Toast />
    </ToastProvider>
  )
}

export default App;