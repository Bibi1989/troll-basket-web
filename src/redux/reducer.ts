import { combineReducers } from "redux";
import productsReducer from "./products/reducer";

const appReducer = combineReducers({
  products: productsReducer,
});

export type AppState = ReturnType<typeof combineReducers>;

export default appReducer;
