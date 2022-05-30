import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "features/login/slices/auth_slice";


export const rootReducer = combineReducers({
  authReducer: authReducer
});

export type RootReducer = ReturnType<typeof rootReducer>