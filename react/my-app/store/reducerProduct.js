import {
    REQUEST_ALL_PRODUCT,
    REQUEST_PRODUCT_BY_NAME
} from "./action.js";
import {Product} from "../models/product";

const inintalState = {
    products = [];
};


export default function reducer(state = inintalState, action) {

    switch (action.type) {
      case REQUEST_ALL_PRODUCT: {
        return ...state
      }
      case REQUEST_PRODUCT_BY_NAME: {
        return {...state.basket.deleteProduct(action.idProduct)};
      }
      default:
        return state;
    }
  }

