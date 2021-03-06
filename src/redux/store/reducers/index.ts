import {combineReducers} from 'redux'
import { imageReducer } from './imageReducer'

export const rootReducer = combineReducers({
    images: imageReducer
})

export type RootState = ReturnType<typeof rootReducer>