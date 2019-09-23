import { Action } from "redux";
import { Product } from "../models/product";

const ADD_ALL_PRODUCTS = "REQUEST_ALL_PRODUCTS";
const ADD_ALL_PRODUCT_BY_NAME = "REQUEST_PRODUCT_BY_NAME";
const ADD_TO_BASKET = "ADD_TO_BASKET";
const DELETE_FROM_BASKET = "DELETE_FROM_BASKET";
const DELETE_ALL_FROM_BASKET = "DELETE_ALL_FROM_BASKET";
const REQUEST_SUCCESS = "REQUEST_SUCCESS";

export function AddAllProducts(products)
{
  return {
  type : ADD_ALL_PRODUCTS,
  products
  }
}
export function GetAllProductByName(){
  return{
  type : GET_ALL_PRODUCTS,
  name
}}
export function AddToBasket(product){
  return{
  type:ADD_TO_BASKET,
  product
  }
}
export function DeleteFromBasket(idProduct){
  return{
  type : DELETE_FROM_BASKET,
  idProduct
  }
}
export function DeleteAllFromBasket(){
  return{
  type:DELETE_ALL_FROM_BASKET
  }
}
export function RequestSuccess (payLoad){
  return{
  type : REQUEST_SUCCESS,
  payLoad
  }
}


