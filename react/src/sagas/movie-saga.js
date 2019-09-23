import * as movieService from "../services";
import * as movieAction from "../actions/movieActions";

import { put, call } from "redux-saga/effects";

export function* allMovieSaga(){
    try{
        const movies = yield call(movieService.getAllMovie);
        console.log("saga");
        yield[
            put(movieAction.MoviesSuccess(movies))
        ];
    }
    catch (error){
        yield[
            put({ type: "REQUEST_FAIL", error})
        ];
    }
}


export function* NameMovieSaga(action){
    try{
        const movies = yield call(movieService.getByNameMovie, action.message);

        yield[
            put(movieAction.MoviesSuccess(movies))
        ];
    }
    catch (error){
        yield[
            put({ type: "REQUEST_FAIL", error})
        ];
    }
}

export function* TypeMovieSaga(action){
    try{
        const movies = yield call(movieService.getByGeneryMovie, action.message);
        console.log(movies)
        yield[
            put(movieAction.MoviesSuccess(movies))
        ];
    }
    catch (error){
        yield[
            put({ type: "REQUEST_FAIL", error})
        ];
    }
}


export function* WishListSaga(action){
    try{
        const movies = yield call(movieService.getByIdMovie, action.message);
        console.log(movies);
        yield[
            put(movieAction.AddToWishListOB(movies))
        ];
    }
    catch (error){
        yield[
            put({ type: "REQUEST_FAIL", error})
        ];
    }
}

