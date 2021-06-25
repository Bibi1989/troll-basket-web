import { ProductsProps } from "components/Home/Products/Item/Card";
import { carts } from "mockData/carts";
import { products } from "mockData/data";
import { Dispatch } from "redux";
import { GET_ALL_PRODUCTS, GET_CART, GET_PRODUCT } from "./types";

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

export const getCartItems = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_CART, payload: carts });
  } catch (error) {
    throw error;
  }
};

export const addCartItem =
  (cart: ProductsProps) => async (dispatch: Dispatch) => {
    try {
      dispatch({ type: GET_CART, payload: cart });
    } catch (error) {
      throw error;
    }
  };
