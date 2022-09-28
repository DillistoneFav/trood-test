import {combineReducers, configureStore} from "@reduxjs/toolkit";
import progressBarReducer from "./reducers/ProgressBarSlice";

const rootReducer = combineReducers({
  progressBarReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
