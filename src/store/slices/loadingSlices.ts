import { createSlice } from '@reduxjs/toolkit'

export interface loadingStatus {
  loadingStatus: any
}

export type initialStateType = {
  loading: boolean
}

const initialState: initialStateType = {
  loading: false
}

const appLoading = createSlice({
  name: 'appLoading',
  initialState: initialState,

  reducers: {
    changeLoadingStatus: (state, action) => {
      return {
        ...state,
        loading: action.payload
      }
    }
  }
})

// Actions
export const appLoadingActions = appLoading.actions

// Selectors
export const loadingStatus = (state: any) => state.loading.loading

// Reducer
const loadingReducer = appLoading.reducer
export default loadingReducer
