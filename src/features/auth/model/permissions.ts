import type { Permission, Role } from '@/shared/types'

export const permissionsByRole: Record<Role, Permission[]> = {
  user: [
    'product.read',

    'cart.read',
    'cart.add',
    'cart.remove',

    'order.read',
    'order.create',

    'profile.read',
    'profile.update',
  ],

  admin: [
    'product.read',
    'product.create',
    'product.update',
    'product.delete',

    'post.read',
    'post.create',
    'post.update',
    'post.delete',

    'cart.read',
    'cart.add',
    'cart.remove',

    'order.read',
    'order.create',

    'profile.read',
    'profile.update',

    'user.read',
    'user.update',
    'user.delete',
  ],
}