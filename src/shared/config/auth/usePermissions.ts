import { useAuth } from "@/app/providers/useAuth";
import { hasPermission } from "./hasPermission";
import { Permission } from "@/shared/types/Permission";


function usePermissions() {
  const { user } = useAuth()

  function can(permission: Permission) {
    if (user === null) return false

    return hasPermission(user.role, permission)
  }

  return {
    can
  }
}

export default usePermissions;