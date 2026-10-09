import { subscribeToAuthState } from "@/features/auth"
import { useEffect } from "react";
import { User } from "firebase/auth";
import { setInitialized, setUser } from "@/features/auth/model/authSlice";
import { useDispatch } from "react-redux";
import { getUserProfile } from "@/features/auth/api/userProfileApi";

function InitAuth({ children }: { children: React.ReactNode }) {

  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = subscribeToAuthState(
      async function (user: User | null) {

        try {
          if (!user) {
            dispatch(setUser(null))
            return
          }

          const userProfile = await getUserProfile(user.uid)

          dispatch(setUser(userProfile))

        } catch (error) {
          console.error('Failed to initialize authentication:', error)
          dispatch(setUser(null))
        } finally {
          dispatch(setInitialized(true))
        }
      }
    )
    return unsubscribe
  }, [dispatch]);

  return children
}

export default InitAuth