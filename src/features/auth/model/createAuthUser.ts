import { TEMP_ADMIN_EMAIL } from "@/shared/config/auth/authConfig";
import { AuthUser, Role } from "@/shared/types/Role";
import { User } from "firebase/auth";


export function createAuthUser(firebaseUser: User): AuthUser {
  const uid = firebaseUser.uid

  const email = firebaseUser.email ?? ''

  const role: Role = email === TEMP_ADMIN_EMAIL ? 'admin' : 'user'

  return {
    uid,
    email,
    role
  }
}