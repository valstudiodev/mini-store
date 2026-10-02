

import { createContext, useEffect, useState } from 'react'
import type { User } from 'firebase/auth'
import { onAuthStateChanged } from 'firebase/auth'

import { auth } from '@/shared/config/firebase/firebase-config'
import { AuthUser } from '@/shared/types/Role'
import { createAuthUser } from '@/features/auth/model/createAuthUser'

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

  useEffect(() => {
    // Firebase повідомляє про login/logout та відновлення session.
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser === null) {
        setUser(null)
      }
      else {
        const authUser = createAuthUser(firebaseUser)
        setUser(authUser)
      }

      setLoading(false)
    })

    // При unmount прибираємо listener.
    return unsubscribe
  }, [])

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  )
}