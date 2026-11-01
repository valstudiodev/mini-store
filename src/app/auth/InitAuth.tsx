import { subscribeToAuthState } from "@/features/auth"
import { useEffect } from "react";
import { User } from "firebase/auth";
import { setInitialized, setUser } from "@/features/auth/model/authSlice";
import { useDispatch } from "react-redux";
import { getUserProfile } from "@/features/auth/api/userProfileApi";
import { useAppDispatch } from "../store/hooks";

// function InitAuth({ children }: { children: React.ReactNode }) {

//   const dispatch = useDispatch()

//   useEffect(() => {
//     const unsubscribe = subscribeToAuthState(
//       async function (user: User | null) {
//         console.log('Firebase Auth user:', user);

//         try {
//           if (!user) {
//             dispatch(setUser(null))
//             return
//           }

//           const userProfile = await getUserProfile(user.uid)

//           console.log('Firestore profile:', userProfile);

//           dispatch(setUser(userProfile))

//         } catch (error) {
//           console.error('Failed to initialize authentication:', error)
//           dispatch(setUser(null))
//         } finally {
//           dispatch(setInitialized(true))
//         }
//       }
//     )
//     return unsubscribe
//   }, [dispatch]);

//   return children
// }

function InitAuth({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    let isActive = true;

    const unsubscribe = subscribeToAuthState(
      async (firebaseUser: User | null) => {
        try {
          if (!firebaseUser) {
            if (isActive) {
              dispatch(setUser(null));
            }

            return;
          }

          const userProfile = await getUserProfile(firebaseUser.uid);

          if (isActive) {
            dispatch(setUser(userProfile));
          }
        } catch (error) {
          console.error('Failed to initialize authentication:', error);

          if (isActive) {
            dispatch(setUser(null));
          }
        } finally {
          if (isActive) {
            dispatch(setInitialized(true));
          }
        }
      },
    );

    return () => {
      isActive = false;
      unsubscribe();
    };
  }, [dispatch]);

  return <>{children}</>;
}

export default InitAuth