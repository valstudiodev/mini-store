import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { openAuthModal } from "@/features/auth/model/authModalSlice";
import { selectAuthInitialized, selectAuthUser } from "@/features/auth/model/authSelector";
import { useEffect } from "react";

interface ProtectedRouteProps {
  children: React.JSX.Element;
  requiresAuth: boolean;
  allowedRoles?: string[];
}

function ProtectedRoute({
  children,
  requiresAuth = true,
  allowedRoles
}: ProtectedRouteProps): React.JSX.Element | null {

  const dispatch = useAppDispatch()
  const user = useAppSelector(selectAuthUser)
  const initialized = useAppSelector(selectAuthInitialized)

  useEffect(() => {
    if (!initialized) return

    if (requiresAuth && user === null) {
      dispatch(openAuthModal())
    }

  }, [initialized, user, requiresAuth, dispatch]);

  if (!initialized) {
    return <div>LOADING PROTECTED ROUTE...</div>
  }

  if (requiresAuth && user === null) {
    return null
  }

  if (allowedRoles && (!user || !allowedRoles.includes(user.role))) {
    return <div className="text-center text-4xl">Access denied</div>
  }


  return children
}

export default ProtectedRoute;