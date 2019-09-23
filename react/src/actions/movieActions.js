import * as actionType from "./type";



export const MovieRequestName = (message) => ({
    type : actionType.REQUEST_BY_NAME_MOVIE,
    message
});


export const MovieRequestGenery = (message) =>({
    type : actionType.REQUEST_BY_TYPE_MOVIE,
    message
})

//----------------------------------------------
export const MovieRequestAll = () =>({
    type : actionType.REQUEST_ALL_MOVIE,
    
})

export const AddToWishList = (Movie) =>(
    {
        type: actionType.ADD_TO_WISH,
        Movie
    }
)


//-----------------------------------
export const DeleteFromWish = (id) =>(
{
    type: actionType.DELETE_FROM_WISH,
    id
}
)
export const MoviesSuccess = (payLoad) =>({
    type: actionType.REQUEST_SUCCESS,
    payLoad
});


export const AddToWishListReq = (message) =>({
    type: actionType.ADD_TO_WISH_OBJECT_REQUEST,
    message
});

export const AddToWishListOB = (payLoad) =>(
    {
        type: actionType.ADD_TO_WISH_OBJECT,
        payLoad
    }
)

