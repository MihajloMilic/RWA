import {
    ADD_TO_BASKET,
    DELETE_FROM_BASKET,
    DELETE_ALL_FROM_BASKET
} from "./action.js";
import {Basket}  from "./../models/basket.js"

const inintalState = {
    basket = new Basket(1)
};


export default function reducer(state = inintalState, action) {

    switch (action.type) {
      case ADD_TO_BASKET: {
        return {...state.bakset.addProduct(action.product)}
      }
      case DELETE_FROM_BASKET: {
        return {...state.basket.deleteProduct(action.idProduct)};
      }
      case DELETE_ALL_FROM_BASKET: {;
        return {...state.basket.DeleteAllFromBasket()}
      }
      default:
        return state;
    }
  }

