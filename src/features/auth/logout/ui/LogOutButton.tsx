import { useAppDispatch } from "@/app/store/hooks";
import { clearCart } from "@/entities/cart/model/cartSlice";
import { LogOut } from "lucide-react";
import { logout } from "../model/logout";

function ButtonLogout(): React.JSX.Element {
  const buttonLogout = 'button-logout'

  const dispatch = useAppDispatch()

  const handleLogout = async (): Promise<void> => {
    try {
      await logout()
      dispatch(clearCart())
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  return (
    <button
      className={buttonLogout}
      type="button"
      onClick={handleLogout}
    >
      <span>
        <LogOut size={22} />
      </span>
    </button>
  );
}

export default ButtonLogout;