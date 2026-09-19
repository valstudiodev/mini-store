
type ProductColor =
  | 'black'
  | 'white'
  | 'green'
  | 'orange'

export function isProductColor(value: string): value is ProductColor {
  if (value === 'black') return true

  if (value === 'white') return true

  if (value === 'green') return true

  if (value === 'orange') return true

  return false
}