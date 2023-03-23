import { MBlogModal } from '../../models/blog'
import { createSlice } from '@reduxjs/toolkit'

export type initialStateType = {
  blogList: any
  totalBlog: number
  blogFilter: MBlogModal
  offset: number
  itemsPerPage: number
}

const initialState: initialStateType = {
  blogList: null,
  totalBlog: 0,
  offset: 0,
  itemsPerPage: 10,
  blogFilter: new MBlogModal()
}

const blog = createSlice({
  name: 'blog',
  initialState: initialState,

  reducers: {
    getBlogList: (state, action) => {
      return {
        ...state,
        blogFilter: { ...state.blogFilter, ...action.payload }
      }
    },
    getBlogListSuccess: (state, action) => {
      return {
        ...state,
        blogList: action.payload.data
      }
    },
    getBlogListFailed: (state) => {
      return {
        ...state
      }
    },
    setTotalBlog: (state, action) => {
      return {
        ...state,
        totalBlog: action.payload
      }
    }
  }
})

// Actions
export const blogActions = blog.actions

// Reducer
const blogReducer = blog.reducer
export default blogReducer
