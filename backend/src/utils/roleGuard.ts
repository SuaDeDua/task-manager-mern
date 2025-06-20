import { PermissionType } from "../enums/role.enum";
import { NotFoundException, UnauthorizedException } from "./appError";
import { RolePermissions } from "./role-permission";

export const roleGuard = (
  role: keyof typeof RolePermissions,
  requiredPermission: PermissionType[]
) => {
  const permissions = RolePermissions[role];
  // If the role doesn't exist or lacks required permissions, throw an exception

  const hasPermissions = requiredPermission.every((permission) =>
    permissions.includes(permission)
  );

  if(!hasPermissions){
    throw new UnauthorizedException("You do not have the necessary permissions to perform this action")
  }
};
