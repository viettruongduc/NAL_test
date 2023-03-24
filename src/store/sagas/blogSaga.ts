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
    const totalBlog: ResponseGenerator = yield call(
      axiosService.getAll,
      null,
      // action.payload.search,
      ''
    )
    yield put(blogActions.getBlogListSuccess(response))
    yield put(blogActions.setTotalBlog(totalBlog?.data?.length))
  } catch (error) {
    yield put(blogActions.getBlogListFailed())
  }
}

export default function* blogSaga() {
  yield takeLatest(blogActions.getBlogList, getBlogList)
}
