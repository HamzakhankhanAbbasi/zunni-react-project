import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  UPDATE_CART,
  EMPTY_CART,
} from "../action_types";
import { toast } from "react-toastify";

const initialState = {
  cartItems: [],
};

function cart(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      const isItemFound = state.cartItems.find((f) => f.id === action.item.id);
      console.log("action.item", action.item);
      const quantityIsAvailable =
        Number(action.item.quantity) !== 0 ? true : false;
      console.log("action.item", quantityIsAvailable);
      let items = [];
      if (isItemFound) return state;
      if (quantityIsAvailable) {
        const quantity = 1;
        let incomingPayload = action.item;
        incomingPayload.qty = quantity;
        items = [...state.cartItems, incomingPayload];
        toast.success("Item Added Successfully");
      } else {
        toast.warn("Item Is Out Of Stock");
      }
      return {
        ...state,
        cartItems: items,
      };
    }
    case UPDATE_CART: {
      const isItemFound = state.cartItems.find((f) => f.id === action.item.id);
      if (isItemFound) {
      }
      const items = [...state.cartItems, action.item];
      toast.success("Item Added Successfully");
      return {
        ...state,
        cartItems: items,
      };
    }
    case DELETE_FROM_CART: {
      // console.log("currentItems", currentItems);
      const currentItems = state.cartItems.slice(0);
      const idForItemToDelete = action?.item;
      const remainingItem = currentItems.filter((e) => {
        return e.id !== idForItemToDelete;
      });
      return {
        ...state,
        cartItems: remainingItem,
      };
    }
    case EMPTY_CART: {
      return {
        ...state,
        cartItems: [],
      };
    }
    default:
      return state;
  }
}
export default cart;
