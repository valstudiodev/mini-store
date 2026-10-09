import { Permission, Role } from "@/shared/types";
import { permissionsByRole } from "./permissions";


export function hasPermission(role: Role, permission: Permission): boolean {
  return permissionsByRole[role].includes(permission)
}