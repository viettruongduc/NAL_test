import { MBlogFilter, MBlogModel } from '../../models/blog'
import { createSlice } from '@reduxjs/toolkit'

export type initialStateType = {
  blogList: any
  blogFilter: MBlogFilter
  pageSize: number
  isShowCreateModal: boolean
  isShowBadge: boolean
  blogDetail: MBlogModel
}

const initialState: initialStateType = {
  blogList: null,
  pageSize: 10,
  blogFilter: new MBlogFilter(),
  isShowCreateModal: false,
  isShowBadge: false,
  blogDetail: new MBlogModel()
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
    createBlog: (state, action) => {
      return {
        ...state
      }
    },
    createBlogSuccess: (state, action) => {
      return {
        ...state
      }
    },
    createBlogFailed: (state) => {
      return {
        ...state
      }
    },
    getBlogById: (state, action) => {
      return {
        ...state
      }
    },
    getBlogByIdSuccess: (state, action) => {
      return {
        ...state,
        blogDetail: action.payload
      }
    },
    getBlogByIdFailed: (state) => {
      return {
        ...state
      }
    },
    deleteBlog: (state, action) => {
      return {
        ...state
      }
    },
    deleteBlogSuccess: (state, action) => {
      return {
        ...state
      }
    },
    deleteBlogFailed: (state) => {
      return {
        ...state
      }
    },
    setIsShowCreateModal: (state, action) => {
      return {
        ...state,
        isShowCreateModal: action.payload
      }
    },
    setIsShowBadge: (state, action) => {
      return {
        ...state,
        isShowBadge: action.payload
      }
    }
  }
})

// Actions
export const blogActions = blog.actions

// Reducer
const blogReducer = blog.reducer
export default blogReducer
