import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { authSlice } from './slices/auth'

const combinedReducers = combineReducers({
  auth: authSlice.reducer,
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
