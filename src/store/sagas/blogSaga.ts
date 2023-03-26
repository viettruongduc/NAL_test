import { PayloadAction } from '@reduxjs/toolkit'
import { call, put, takeLatest } from 'redux-saga/effects'
import { axiosService } from '../../services/axios'
import { blogActions } from '../slices/blogSlices'
import { ResponseGenerator } from '../../services/network'

function* getBlogList(action: PayloadAction<any>) {
  try {
    const response: ResponseGenerator = yield call(
      axiosService.getAll,
      action.payload,
      ''
    )
    yield put(blogActions.getBlogListSuccess(response))
  } catch (error) {
    yield put(blogActions.getBlogListFailed())
  }
}

function* getBlogById(action: PayloadAction<any>) {
  try {
    const response: ResponseGenerator = yield call(
      axiosService.getById,
      action.payload.idBlog,
      ''
    )
    yield put(blogActions.getBlogByIdSuccess(response?.data))
  } catch (error) {
    yield put(blogActions.getBlogByIdFailed())
  }
}

function* createBlog(action: PayloadAction<any>) {
  try {
    const response: ResponseGenerator = yield call(
      axiosService.post,
      action.payload,
      ''
    )
    yield put(blogActions.createBlogSuccess(response))
  } catch (error) {
    yield put(blogActions.createBlogFailed())
  }
}

function* deleteBlog(action: PayloadAction<any>) {
  try {
    const response: ResponseGenerator = yield call(
      axiosService.delete,
      action.payload.id,
      ''
    )
    yield put(blogActions.deleteBlogSuccess(response))
  } catch (error) {
    yield put(blogActions.deleteBlogFailed())
  }
}

export default function* blogSaga() {
  yield takeLatest(blogActions.getBlogList, getBlogList)
  yield takeLatest(blogActions.getBlogById, getBlogById)
  yield takeLatest(blogActions.createBlog, createBlog)
  yield takeLatest(blogActions.deleteBlog, deleteBlog)
}
