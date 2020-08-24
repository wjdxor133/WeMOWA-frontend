import { combineReducers } from "redux";
import cart from "./cart";

export default combineReducers({
  cartState: cart,
});
