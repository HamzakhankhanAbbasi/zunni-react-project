import { combineReducers } from "redux";
import auth from "./auth";
import cart from "./cart";

const appReducer = combineReducers({
  auth,
  cart,
});

export default appReducer;
