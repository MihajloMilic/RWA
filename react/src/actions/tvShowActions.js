import * as actionType from "./type";



export const TvShowRequestName = (message) => ({
    type : actionType.REQUEST_BY_NAME_TVSHOWS,
    message
});


export const TvShowRequestGenery = (message) =>({
    type : actionType.REQUEST_BY_TYPE_TVSHOWS,
    message
})

//----------------------------------------------
export const TvShowRequestAll = () =>({
    type : actionType.REQUEST_ALL_TVSHOWS,
    
})


//-----------------------------------

export const TvShowSuccess = (payLoad) =>({
    type: actionType.REQUEST_SUCCESS,
    payLoad
});
