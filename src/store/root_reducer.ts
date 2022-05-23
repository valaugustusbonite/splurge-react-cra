import { combineReducers, ReducersMapObject } from "@reduxjs/toolkit";
import { authReducer } from "store"

let reducers: ReducersMapObject<unknown, any> = {
  authReducer: authReducer
}

export const rootReducer = combineReducers({
  authReducer
});