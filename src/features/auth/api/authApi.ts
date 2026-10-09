import { auth } from "@/shared/config/firebase/firebase-config";
import { onAuthStateChanged, User } from "firebase/auth";


function subscribeToAuthState(
  callback: (user: User | null) => void,
): () => void {
  const unsubscribe = onAuthStateChanged(
    auth,
    (user: User | null) => {
      callback(user);
    },
  );

  return unsubscribe;
}

export default subscribeToAuthState






























// import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
// import {
//   createUserWithEmailAndPassword,
//   getAuth,
//   GoogleAuthProvider,
//   signInWithEmailAndPassword,
//   signInWithPopup,
//   signOut,
//   type User,
// } from 'firebase/auth'
// import DbOperations from '@/shared/config/firebase/DbOperations'
// import type { AuthUser, Role } from '@/shared/types/Role'

// interface AuthApiUser extends AuthUser {
//   displayName: string | null
//   photoURL: string | null
// }

// interface AuthApiError {
//   message: string
// }

// export interface LoginCredentials {
//   email: string
//   password: string
// }

// export interface SignUpCredentials extends LoginCredentials {
//   displayName: string
// }

// interface FirestoreUserData {
//   [field: string]: unknown
//   email?: string | null
//   displayName?: string | null
//   photoURL?: string | null
//   role?: unknown
// }

// function normalizeRole(role: unknown): Role {
//   return role === 'admin' ? 'admin' : 'user'
// }

// function mapAuthUser(
//   firebaseUser: User,
//   userData?: FirestoreUserData
// ): AuthApiUser {
//   return {
//     uid: firebaseUser.uid,
//     email: userData?.email ?? firebaseUser.email ?? '',
//     displayName: userData?.displayName ?? firebaseUser.displayName,
//     photoURL: userData?.photoURL ?? firebaseUser.photoURL,
//     role: normalizeRole(userData?.role),
//   }
// }

// function toAuthApiError(error: unknown): AuthApiError {
//   return {
//     message: error instanceof Error ? error.message : String(error),
//   }
// }

// export const authApi = createApi({
//   reducerPath: 'authApi',
//   baseQuery: fakeBaseQuery<AuthApiError>(),
//   endpoints: (builder) => ({
//     login: builder.mutation<AuthApiUser, LoginCredentials>({
//       async queryFn({ email, password }) {
//         try {
//           const auth = getAuth()
//           const result = await signInWithEmailAndPassword(auth, email, password)
//           const usersDb = new DbOperations<FirestoreUserData>('users')
//           const userData = await usersDb.getById(result.user.uid)

//           return { data: mapAuthUser(result.user, userData) }
//         } catch (error) {
//           return { error: toAuthApiError(error) }
//         }
//       },
//     }),
//     googleLogin: builder.mutation<AuthApiUser, void>({
//       async queryFn() {
//         try {
//           const auth = getAuth()
//           const provider = new GoogleAuthProvider()
//           provider.setCustomParameters({ prompt: 'select_account' })
//           const result = await signInWithPopup(auth, provider)
//           const usersDb = new DbOperations<FirestoreUserData>('users')

//           if (
//             result.user.metadata.creationTime ===
//             result.user.metadata.lastSignInTime
//           ) {
//             await usersDb.setWithId(result.user.uid, {
//               uid: result.user.uid,
//               email: result.user.email,
//               displayName: result.user.displayName,
//               photoURL: result.user.photoURL,
//               role: 'user',
//               createdAt: new Date().toISOString(),
//             })
//           }

//           const userData = await usersDb.getById(result.user.uid)
//           return { data: mapAuthUser(result.user, userData) }
//         } catch (error) {
//           return { error: toAuthApiError(error) }
//         }
//       },
//     }),
//     signUp: builder.mutation<AuthApiUser, SignUpCredentials>({
//       async queryFn({ email, password, displayName }) {
//         try {
//           const auth = getAuth()
//           const result = await createUserWithEmailAndPassword(
//             auth,
//             email,
//             password
//           )
//           const usersDb = new DbOperations<FirestoreUserData>('users')

//           await usersDb.setWithId(result.user.uid, {
//             uid: result.user.uid,
//             email: result.user.email,
//             displayName,
//             photoURL: result.user.photoURL,
//             role: 'user',
//             createdAt: new Date().toISOString(),
//           })

//           return {
//             data: mapAuthUser(result.user, {
//               displayName,
//               role: 'user',
//             }),
//           }
//         } catch (error) {
//           return { error: toAuthApiError(error) }
//         }
//       },
//     }),
//     refresh: builder.mutation<AuthApiUser, void>({
//       async queryFn() {
//         try {
//           const user = getAuth().currentUser
//           if (!user) {
//             return { error: { message: 'Not authenticated' } }
//           }

//           const usersDb = new DbOperations<FirestoreUserData>('users')
//           const userData = await usersDb.getById(user.uid)
//           return { data: mapAuthUser(user, userData) }
//         } catch (error) {
//           return { error: toAuthApiError(error) }
//         }
//       },
//     }),
//     logout: builder.mutation<boolean, void>({
//       async queryFn() {
//         try {
//           await signOut(getAuth())
//           return { data: true }
//         } catch (error) {
//           return { error: toAuthApiError(error) }
//         }
//       },
//     }),
//   }),
// })

// export const {
//   useLoginMutation,
//   useGoogleLoginMutation,
//   useSignUpMutation,
//   useLogoutMutation,
//   useRefreshMutation,
// } = authApi
