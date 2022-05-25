import { combineReducers, ReducersMapObject } from "@reduxjs/toolkit";
import authReducer from "features/login/slices/auth_slice";

// let reducers: ReducersMapObject<unknown, any> = {
//   authReducer: authReducer
// }

export const rootReducer = combineReducers({
  authReducer: authReducer
});

export type RootReducer = ReturnType<typeof rootReducer>