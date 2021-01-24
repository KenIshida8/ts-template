// オプションパラメーターを持つ関数
export const isUserSignedIn = (userId: string, username?: string): boolean => {
  if (userId === 'abc') {
    console.log('Function parameters sample1: User is signed in username is', username)
    return true
  } else {
    console.log('Function parameters sample2: User is not signed in username is.')
    return false
  }
}

// デフォルトパラメーターを持つ関数
export const isUserSignedIn2 = (userId: string, username = 'No Name'): boolean => {
  if (userId === 'abc') {
    console.log('Function parameters sample3: User is signed in username is', username)
    return true
  } else {
    console.log('Function parameters sample4: User is not signed in username is.')
    return false
  }
}

// レストパラメーターを持つ関数
export const sumProductsPrice = (...productsPrice: number[]): number => {
  return productsPrice.reduce((prevTotal, productsPrice: number) => {
    return prevTotal + productsPrice
  }, 0)
}
