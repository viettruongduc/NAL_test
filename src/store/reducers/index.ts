import { combineReducers } from 'redux'
import blogReducer from '../slices/blogSlices'

export const rootReducer = combineReducers({
  blogList: blogReducer
})
