import { ADD_TO_CART, DELETE_FROM_CART,EMPTY_CART } from "../action_types";

export function addToCart(itemInfo) {
  return {
    type: ADD_TO_CART,
    item: itemInfo,
  };
}
export function deleteFromCart(id) {
  return {
    type: DELETE_FROM_CART,
    item: id,
  };
}
export function emptyCart() {
  return {
    type: EMPTY_CART,
  };
}
