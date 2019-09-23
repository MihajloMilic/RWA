import * as tvShowService from "../services/tvShow-service";
import * as tvShowActions from "../actions/tvShowActions";
import { put, call } from "redux-saga/effects";

export function* allTvShowSaga(){
    try{
        const tvShows = yield call(tvShowService.getAllShow);

        yield[
            put(tvShowActions.TvShowSuccess(tvShows))
        ];
    }
    catch (error){
        yield[
            put({ type: "REQUEST_FAIL", error})
        ];
    }
}


export function* NameTvShowSaga(action){
    try{
        const tvShows = yield call(tvShowService.getByNameShow, action.message);

        yield[
            put(tvShowActions.TvShowSuccess(tvShows))
        ];
    }
    catch (error){
        yield[
            put({ type: "REQUEST_FAIL", error})
        ];
    }
}

export function* TypeTvShowSaga(action){
    try{
        const tvShows = yield call(tvShowService.getByGeneryShow, action.message);

        yield[
            put(tvShowActions.TvShowSuccess(tvShows))
        ];
    }
    catch (error){
        yield[
            put({ type: "REQUEST_FAIL", error})
        ];
    }
}