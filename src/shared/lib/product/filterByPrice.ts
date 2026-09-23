

export function matchesPriceFilter(price: string, productPrice: number) {
  if (price === '') return true

  if (price === 'Less than $100') {
    return productPrice <= 100
  }

  if (price === '$100-$200') {
    return productPrice > 100 && productPrice <= 200
  }

  if (price === '$200-$300') {
    return productPrice > 200 && productPrice <= 300
  }

  if (price === '$300-$400') {
    return productPrice > 300 && productPrice <= 400
  }

  if (price === '$400-$500') {
    return productPrice > 400 && productPrice <= 500
  }

  return false
}