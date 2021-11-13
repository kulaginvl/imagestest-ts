export interface ImagesState {
    images: any[];
    loading: boolean;
    error: null | string;
    limit: number;
    page: number;
    albumId: number;
}

export enum ImageActionsTypes {
    FETCH_IMAGES = 'FETCH_IMAGES',
    FETCH_IMAGES_SUCCESS = 'FETCH_IMAGES_SUCCESS',
    FETCH_IMAGES_ERROR = 'FETCH_IMAGES_ERROR',
    FETCH_IMAGES_PAGES = 'FETCH_IMAGES_PAGES',
    DELETE_IMAGE = 'DELETE_IMAGE',
    DELETE_IMAGE_SUCCESS = 'DELETE_IMAGE_SUCCESS',
    SORT_ALBUM = 'SORT_ALBUM',
}

interface FetchImagesAction {
    type: ImageActionsTypes.FETCH_IMAGES
}
interface FetchImagesSuccessAction {
    type: ImageActionsTypes.FETCH_IMAGES_SUCCESS;
    payload: any[]
}
interface FetchImagesErrorAction {
    type: ImageActionsTypes.FETCH_IMAGES_ERROR;
    payload: string
}
interface FetchPagesAction {
    type: ImageActionsTypes.FETCH_IMAGES_PAGES;
    payload: number
}
interface DeleteImageAction {
    type: ImageActionsTypes.DELETE_IMAGE;
}
interface DeleteImageSuccessAction {
    type: ImageActionsTypes.DELETE_IMAGE_SUCCESS;
    payload: number
}
interface DeleteImageSuccessAction {
    type: ImageActionsTypes.DELETE_IMAGE_SUCCESS;
    payload: number
}
interface SortAlbumAction {
    type: ImageActionsTypes.SORT_ALBUM;
    payload: number
}

export type ImageAction = FetchImagesAction | FetchImagesSuccessAction | FetchImagesErrorAction 
| FetchPagesAction | DeleteImageAction | DeleteImageSuccessAction | SortAlbumAction