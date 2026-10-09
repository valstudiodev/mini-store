import { AuthUser, Role } from "@/shared/types/Role";
import { User } from "firebase/auth";


export async function createAuthUser(firebaseUser: User): Promise<AuthUser> {
  const uid = firebaseUser.uid

  const email = firebaseUser.email ?? ''

  const tokenResult = await firebaseUser.getIdTokenResult(true)

  const role: Role = tokenResult.claims.role === 'admin' ? 'admin' : 'user'

  return {
    uid,
    email,
    role
  }
}