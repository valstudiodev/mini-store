import { Permission } from "@/shared/types/Permission";
import { Role } from "@/shared/types/Role";
import { permissionsByRole } from "./permissions";

export function hasPermission(role: Role, permission: Permission) {
  const permissions = permissionsByRole[role]

  if (permissions.includes(permission)) {
    return true
  }

  return false
}