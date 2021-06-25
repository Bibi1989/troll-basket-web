import { AnyAction } from "redux";
import { ADD_TO_CAART, GET_ALL_PRODUCTS, GET_CART, GET_PRODUCT } from "./types";

const initialState = {
  products: [],
  product: null,
  carts: [],
};

const productsReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case GET_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };
    case GET_CART:
      return {
        ...state,
        carts: action.payload,
      };
    case ADD_TO_CAART:
      return {
        ...state,
        carts: state.carts.concat(action.payload),
      };

    default:
      return state;
  }
};

export default productsReducer;
