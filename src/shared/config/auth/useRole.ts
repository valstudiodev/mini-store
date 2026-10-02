import { useAuth } from "@/app/providers/useAuth";
import { Role } from "@/shared/types/Role";


function useRole() {
  const { user } = useAuth()

  function hasRole(role: Role) {
    if (user === null) return false

    return user.role === role
  }

  return {
    hasRole
  }
}

export default useRole;