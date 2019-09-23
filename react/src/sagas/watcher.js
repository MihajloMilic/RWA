import { takeLatest } from "redux-saga";
import * as movieSaga from './movie-saga';
import * as tvShowSaga from "./tvShow-saga";
import * as ActionType from "../actions/type"


export function* WatchMoviesAll(){
    yield takeLatest(ActionType.REQUEST_ALL_MOVIE, movieSaga.allMovieSaga);
}

export function* WatchMoviesName(){
    yield takeLatest(ActionType.REQUEST_BY_NAME_MOVIE, movieSaga.NameMovieSaga);
}

export function* WatchMoviesType(){
    yield takeLatest(ActionType.REQUEST_BY_TYPE_MOVIE, movieSaga.TypeMovieSaga);
}

//----------------------------------------------------------------------------

export function* WatchTvShowsAll(){
    yield takeLatest(ActionType.REQUEST_ALL_TVSHOWS, tvShowSaga.allTvShowSaga);
}


export function* WatchTvShowsName(){
    yield takeLatest(ActionType.REQUEST_BY_NAME_TVSHOWS, tvShowSaga.NameTvShowSaga);
}

export function* WatchTvShowsType(){
    yield takeLatest(ActionType.REQUEST_BY_TYPE_TVSHOWS, tvShowSaga.TypeTvShowSaga);
}


export function* WatchWishListOB(){
    yield takeLatest(ActionType.ADD_TO_WISH_OBJECT_REQUEST, movieSaga.WishListSaga);
}


export function* WatchWishListDelete(){
    yield takeLatest(ActionType.DELETE_FROM_WISH, movieSaga.WishListSaga);
}