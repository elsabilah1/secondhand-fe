import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'
import { authSlice } from './slices/auth'
import { productSlice } from './slices/product'

const combinedReducers = combineReducers({
  auth: authSlice.reducer,
  product: productSlice.reducer,
})

const rootReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    }
    return nextState
  }
  return combinedReducers(state, action)
}

export const store = configureStore({
  reducer: rootReducer,
})

const makeStore = () => store

export const wrapper = createWrapper(makeStore)
