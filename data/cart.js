export const cart = [];

export function addToCart(productid) {
  let matchingItem;
  cart.forEach((cartItem) => {
    if (productid === cartItem.productid) {
      matchingItem = cartItemtem;
    }
  })
  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      productid: productid,
      quantity: 1,
    });
  }
}