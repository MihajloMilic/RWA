import * as TypeAction from '../actions/type';


const initialState = {
    moviesReducer: [],
    wishList:[],
    wishListOB: []
};

export default function(state = initialState,action){
    switch(action.type){
        case TypeAction.REQUEST_ALL_MOVIE:
        return{
            ...state
        };
        case TypeAction.REQUEST_BY_NAME_MOVIE:
        return{
            ...state,
            message : action.message
        };
        case TypeAction.REQUEST_BY_TYPE_MOVIE:
        return{
            ...state,
            message : action.message
        };
        case TypeAction.REQUEST_SUCCESS:
        return {
            ...state,
            moviesReducer: action.payLoad
        };
        case TypeAction.ADD_TO_WISH:
            return{
                ...state,
                wishList: [...state.wishList, action.Movie]
            };
        case TypeAction.DELETE_FROM_WISH:
        var help =[];
        help = state.wishList.filter(item=>item!==action.id);
            return{
                ...state,
                wishList:help
            };
        case TypeAction.ADD_TO_WISH_OBJECT:
                return {
                    ...state,
                    wishListOB: action.payLoad
                };
        default:
        return state;
    }
  
}





