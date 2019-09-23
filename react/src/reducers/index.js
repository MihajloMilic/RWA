import { combineReducers } from "redux";

import TvShowReducer from "./tvShowReducer";
import MovieReducer from "./moviesReducers";

export default  combineReducers({
    moviesRoot : MovieReducer,
    tvShowsRoot : TvShowReducer,
});


