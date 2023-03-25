import { MBlogModal } from '../../models/blog'
import { createSlice } from '@reduxjs/toolkit'

export type initialStateType = {
  blogList: any
  blogFilter: MBlogModal
  pageSize: number
  modalIdName: string
  isShowCreateModal: boolean
}

const initialState: initialStateType = {
  blogList: null,
  pageSize: 10,
  blogFilter: new MBlogModal(),
  modalIdName: '',
  isShowCreateModal: false
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
    setModalId: (state, action) => {
      return {
        ...state,
        modalIdName: action.payload
      }
    },
    setIsShowCreateModal: (state, action) => {
      console.log(action.payload)
      return {
        ...state,
        isShowCreateModal: action.payload.isShowCreateModal
      }
    }
  }
})

// Actions
export const blogActions = blog.actions

// Reducer
const blogReducer = blog.reducer
export default blogReducer
