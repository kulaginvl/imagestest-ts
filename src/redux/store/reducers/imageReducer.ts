import { ImagesState, ImageAction, ImageActionsTypes } from "../../types";

const initialState: ImagesState = {
    error: null,
    images: [],
    loading: false,
    page: 1,
    limit: 8,
    albumId: 1,
}

export const imageReducer = (state = initialState, action: ImageAction): ImagesState => {
    switch(action.type){
        case ImageActionsTypes.FETCH_IMAGES:
            return {...state, loading: true}
        case ImageActionsTypes.FETCH_IMAGES_SUCCESS:
            return {...state, loading: false, images: action.payload}
        case ImageActionsTypes.FETCH_IMAGES_ERROR:
            return {...state, loading: false, error: action.payload}
        case ImageActionsTypes.FETCH_IMAGES_PAGES:
            return {...state, loading: false, page: action.payload}
        case ImageActionsTypes.SORT_ALBUM:
            return {...state, loading: false, albumId: action.payload}
        case ImageActionsTypes.DELETE_IMAGE:
            return {...state, loading: true}
        case ImageActionsTypes.DELETE_IMAGE_SUCCESS:
            return {...state, loading: false, images: state.images.filter((image) => image.id !== action.payload)}
        default:
            return state
    }
    
}