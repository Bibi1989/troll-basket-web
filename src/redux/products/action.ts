import { ProductsProps } from "components/Home/Products/Item/Card";
import { carts } from "mockData/carts";
import { products } from "mockData/data";
import { Dispatch } from "redux";
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

const returnBoolean = (crt: ProductsProps, name: string) =>
  crt.name.toLowerCase().includes(name.toLowerCase());

export const getProducts = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_ALL_PRODUCTS, payload: products });
  } catch (error) {
    throw error;
  }
};

export const getProduct = (id: string) => async (dispatch: Dispatch) => {
  try {
    const product = products.find((prod: ProductsProps) => prod.id === id);
    dispatch({ type: GET_PRODUCT, payload: product });
  } catch (error) {
    throw error;
  }
};

export const getCartItems = () => async (dispatch: Dispatch, getState: any) => {
  try {
    dispatch({ type: IS_IN_CART, payload: getState().products?.isInCart });
    dispatch({ type: GET_CART, payload: carts });
  } catch (error) {
    throw error;
  }
};

export const addCartItem =
  (cart: ProductsProps) => async (dispatch: Dispatch, getState: any) => {
    try {
      const isCartAvailable: boolean = getState()?.products?.carts?.some(
        (crt: ProductsProps) => crt.id === cart.id
      );
      if (isCartAvailable) {
        dispatch({ type: IS_IN_CART, payload: true });
        return;
      }
      dispatch({ type: ADD_TO_CAART, payload: cart });
    } catch (error) {
      throw error;
    }
  };

export const deleteCartItem =
  (id: string) => async (dispatch: Dispatch, getState: any) => {
    try {
      const filteredCart = getState()?.products?.carts?.filter(
        (crt: ProductsProps) => crt.id !== id
      );
      dispatch({ type: DELETE_CART, payload: filteredCart });
    } catch (error) {
      throw error;
    }
  };

export const searchItem =
  (name: string) => async (dispatch: Dispatch, getState: any) => {
    try {
      if (name) {
        const filteredCart = getState()?.products?.products?.filter(
          (crt: ProductsProps) => {
            return returnBoolean(crt, name);
          }
        );
        dispatch({ type: SEARCH, payload: filteredCart });
        return;
      } else {
        dispatch({ type: SEARCH, payload: products });
      }
    } catch (error) {
      throw error;
    }
  };

export const increment =
  (id: string) => async (dispatch: Dispatch, getState: any) => {
    try {
      const carts = getState()?.products?.carts?.map((crt: ProductsProps) => {
        if (id === crt.id && crt.quantity <= 30) {
          crt.quantity += 1;
        }
        return crt;
      });
      dispatch({ type: INCREMENT_CART, payload: carts });
    } catch (error) {
      throw error;
    }
  };

export const decrement =
  (id: string) => async (dispatch: Dispatch, getState: any) => {
    try {
      const carts = getState()?.products?.carts?.map((crt: ProductsProps) => {
        if (id === crt.id && crt.quantity >= 1) {
          crt.quantity -= 1;
        }
        return crt;
      });
      dispatch({ type: DECREMENT_CART, payload: carts });
    } catch (error) {
      throw error;
    }
  };
