import  { Dispatch } from 'react'
import axios, { AxiosResponse } from 'axios'
import { ImageAction, ImageActionsTypes } from '../../types'

export const fetchImages = async (dispatch: Dispatch<ImageAction>, page = 1, limit = 8, albumId = 1) => {
    dispatch({type: ImageActionsTypes.FETCH_IMAGES})
   try{
       await axios
       .get(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`,{
           params: {_page: page, _limit: limit}
        }
       )
       .then((res: AxiosResponse) => {
           dispatch({
               type: ImageActionsTypes.FETCH_IMAGES_SUCCESS,
               payload: res.data
           })
       })          
   }catch (e) {
       dispatch({
        type: ImageActionsTypes.FETCH_IMAGES_ERROR,
        payload: 'Error add images'
    })
   }
}

export const fetchPage = (dispatch: Dispatch<ImageAction>, page: number) => {
    dispatch({
        type: ImageActionsTypes.FETCH_IMAGES_PAGES,
        payload: page
    })
}
export const fetchSortAlbum = (dispatch: Dispatch<ImageAction>, albumId: number) => {
    dispatch({
        type: ImageActionsTypes.SORT_ALBUM,
        payload: albumId
    })
}

export const deleteImage = async (dispatch: Dispatch<ImageAction>, id: number) => {
    dispatch({type: ImageActionsTypes.DELETE_IMAGE})
    try{
        await axios
        .delete('http://jsonplaceholder.typicode.com/photos/' + id)
        .then(() => {
            dispatch({
                type: ImageActionsTypes.DELETE_IMAGE_SUCCESS,
                payload: id,
            })
        })
    }catch(e){
        dispatch({
            type: ImageActionsTypes.FETCH_IMAGES_ERROR,
            payload: 'Error delette'
        })
    }
}
