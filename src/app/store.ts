import {combineReducers, configureStore} from "@reduxjs/toolkit";
import progressBarReducer from "./reducers/ProgressBarSlice";
import tableBarReducer from "./reducers/TableSlice"

const rootReducer = combineReducers({
  progressBarReducer,
  tableBarReducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
