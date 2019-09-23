import { fork } from "redux-saga/effects";

import * as watchers from "./watcher";

export default function* start() {
    yield fork(watchers.WatchMoviesAll);
    yield fork(watchers.WatchMoviesName);
    yield fork(watchers.WatchMoviesType);

    yield fork(watchers.WatchTvShowsAll);
    yield fork(watchers.WatchTvShowsName);
    yield fork(watchers.WatchTvShowsType);
    yield fork(watchers.WatchWishListOB);
    yield fork(watchers.WatchWishListDelete);
}