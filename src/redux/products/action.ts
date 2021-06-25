import { ProductsProps } from "components/Home/Products/Item/Card";
import { carts } from "mockData/carts";
import { products } from "mockData/data";
import { Dispatch } from "redux";
import {
  ADD_TO_CAART,
  DELETE_CART,
  GET_ALL_PRODUCTS,
  GET_CART,
  GET_PRODUCT,
  IS_IN_CART,
} from "./types";

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
      console.log(id);
      const filteredCart = getState()?.products?.carts?.filter(
        (crt: ProductsProps) => crt.id !== id
      );
      console.log(filteredCart);
      dispatch({ type: DELETE_CART, payload: filteredCart });
    } catch (error) {
      throw error;
    }
  };
