import { createContext, useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'

import { auth } from '@/shared/config/firebase/firebase-config'
import { AuthUser } from '@/shared/types/Role'
import { createAuthUser } from '@/features/auth/model/createAuthUser'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../store/store'
import { loadCart, setCart } from '@/entities/cart/model/cartSlice'

interface AuthContextValue {
  user: AuthUser | null
  loading: boolean
}

export const AuthContext = createContext<AuthContextValue | null>(null)

interface AuthProviderProps {
  children: React.ReactNode
}

export function AuthProvider({
  children,
}: AuthProviderProps): React.JSX.Element {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  const dispatch = useDispatch<AppDispatch>()
  const cart = useSelector((state: RootState) => state.cart)

  const [cartReadyUid, setCartReadyUid] = useState<
    string | null | undefined
  >(undefined)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async firebaseUser => {
      try {
        if (!firebaseUser) {
          setUser(null)
        } else {
          const authUser = await createAuthUser(firebaseUser)
          setUser(authUser)
        }
      } catch (error) {
        console.error('Failed to initialize authentication:', error)
        setUser(null)
      } finally {
        setLoading(false)
      }
    })

    return unsubscribe
  }, [])

  const uid = user?.uid ?? null

  useEffect(() => {
    if (loading) return

    const savedCart = loadCart(uid)

    dispatch(setCart(savedCart))
    setCartReadyUid(uid)
  }, [loading, uid, dispatch])

  useEffect(() => {
    if (cartReadyUid !== uid) return

    const storageKey = uid ? `cart_${uid}` : 'cart_guest'

    try {
      localStorage.setItem(storageKey, JSON.stringify(cart))
    } catch (error) {
      console.error('Failed to save cart:', error)
    }
  }, [cart, uid, cartReadyUid])

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  )
}