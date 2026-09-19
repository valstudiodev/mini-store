type ProductSize =
  | 'XL'
  | 'L'
  | 'M'
  | 'S'

export function isProductSize(value: string): value is ProductSize {
  if (value === 'XL') return true

  if (value === 'L') return true

  if (value === 'M') return true

  if (value === 'S') return true

  return false
}