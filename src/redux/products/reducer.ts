import { AnyAction } from "redux";
import {
  ADD_TO_CAART,
  DECREMENT_CART,
  DELETE_CART,
  GET_ALL_PRODUCTS,
  GET_CART,
  GET_PRODUCT,
  INCREMENT_CART,
  IS_IN_CART,
  SEARCH,
} from "./types";

const initialState = {
  products: [],
  product: null,
  carts: [],
  isInCart: false,
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
    case IS_IN_CART:
      return {
        ...state,
        isInCart: action.payload,
      };
    case DELETE_CART:
      return {
        ...state,
        carts: action.payload,
      };
    case SEARCH:
      return {
        ...state,
        products: action.payload,
      };
    case INCREMENT_CART:
      return {
        ...state,
        carts: action.payload,
      };
    case DECREMENT_CART:
      return {
        ...state,
        carts: action.payload,
      };

    default:
      return state;
  }
};

export default productsReducer;
