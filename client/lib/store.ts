import { configureStore,combineReducers} from '@reduxjs/toolkit'
import {authSlice} from './features/auth/auth'
import {counterSlice} from './features/counter/counter'


export const store = () => {
  return configureStore({
    reducer:{
      authReducer:authSlice.reducer,
      counterReducer:counterSlice.reducer
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof store>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']