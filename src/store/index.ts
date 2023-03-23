import {
  configureStore,
  getDefaultMiddleware,
  PreloadedState
} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from './reducers'
import rootSaga from './sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware()

const middleware: any = [
  ...getDefaultMiddleware({ thunk: false, serializableCheck: false })
]
middleware.push(sagaMiddleware)

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    middleware,
    preloadedState
  })
}

export const store = setupStore()

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
