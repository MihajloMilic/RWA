import * as TypeAction from '../actions/type';


const initialState = {
    moviesReducer: [],
    wishList:[],
    wishListOB: []
};

export default function(state = initialState,action){
    console.log(action.type);
    switch(action.type){
        case TypeAction.REQUEST_ALL_MOVIE:
        console.log(state);
        console.log(...state);
        return{
            ...state,
            
        };
        case TypeAction.REQUEST_BY_NAME_MOVIE:
        console.log("Reducer movie name");
        return{
            ...state,
            message : action.message
        };
        case TypeAction.REQUEST_BY_TYPE_MOVIE:
        console.log("Reducer movie type");
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
        help = state.wishList.filter(item=>{
            if(item!==action.id)
            {
                return item;
            }
        });
            return{
                ...state,
                wishList:help
            };
        case TypeAction.ADD_TO_WISH_OBJECT:
            console.log(action.payLoad);
                return {
                    ...state,
                    wishListOB: action.payLoad
                };
        case TypeAction.ADD_TO_WISH_OBJECT_REQUEST:
                return {
                    ...state,
                    message: action.message
                };
        
        default:
        return state;
    }
  
}





