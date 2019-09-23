import * as productServis from"../services";
import * as productAction from "./Action.js"
import {put,call} from "redux-saga/effects";

export function* allProductsSaga()
{
    const products = yield call(productServis.getAllProducts);

    yield[
        put(movie)
    ]
}