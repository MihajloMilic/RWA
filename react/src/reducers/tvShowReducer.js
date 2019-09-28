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
        return{
            ...state, 
            message: action.message
        };
        case TypeAction.REQUEST_BY_NAME_TVSHOWS:
        return{
            ...state, 
            message : action.message
        };
        case TypeAction.REQUEST_SUCCESS:
        return {
            ...state,
             tvShowsReducer: action.payLoad
        }
        default:
        return state;
    }
   
};