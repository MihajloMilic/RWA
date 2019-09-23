import * as TypeAction from "../actions/type";


const initialState = {
    tvShowsReducer: [],
};


export default function(state = initialState,action){
    switch(action.type){
        case TypeAction.REQUEST_ALL_TVSHOWS:
        return{
            ...state, 
        };
        case TypeAction.REQUEST_BY_TYPE_TVSHOWS:
        console.log("tvShows genery");
        return{
            ...state, 
            message: action.message
        };
        case TypeAction.REQUEST_BY_NAME_TVSHOWS:
        console.log("tvShows name");
        return{
            ...state, 
            message : action.message
        };
        case TypeAction.REQUEST_SUCCESS:
        console.log("tvShow all reducer");
        return {
            ...state,
             tvShowsReducer: action.payLoad
        }
        default:
        console.log("not action reducer");
        return state;
    }
   
};