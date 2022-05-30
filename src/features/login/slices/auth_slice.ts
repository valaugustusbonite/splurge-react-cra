import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, AuthStateStatus } from "features/login/types/auth_types";

const initialState: AuthState = {
  status: AuthStateStatus.idle,
  data: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetState: (state) => {
      state.data = null,
      state.status = AuthStateStatus.idle;
    },
    fetchingUserFromGoogle: (state) => {
      state.status = AuthStateStatus.loading;
    },
    userEmpty: (state) => {
      state.status = AuthStateStatus.success;
      state.data = null;
    },
    userReceived: (state, action: PayloadAction<any>) => {
      state.status = AuthStateStatus.success;
      state.data = action.payload;
    },
    errorInFetch: (state, action: PayloadAction<any>) => {
      state.status = AuthStateStatus.error;
      state.error = action.payload;
    },
    logout: (state) => {
      state.data = null;
    }
  }
});

const { actions, reducer } = authSlice;

export const { fetchingUserFromGoogle, userReceived, errorInFetch, logout, userEmpty, resetState } = actions;

export default reducer;
