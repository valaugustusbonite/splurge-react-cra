import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { AuthActionTypes, AuthState, AuthStateStatus } from "features/login/types/auth_types";
import { User } from "features/login/types/auth_types";

const initialState: AuthState = {
  status: AuthStateStatus.idle,
  data: null,
}

// const fetchUserById = createAsyncThunk(
//   AuthActionTypes.SIGNIN_WITH_GOOGLE,
//   async (userId, thunkAPI) => {
//     // const response = await userAPI.fetchById(userId)
//     return response.data
//   }
// )

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    fetchingUserFromGoogle: (state) => {
      state.status = AuthStateStatus.loading;
    },
    // signInWithGoogleAction: (state, action: PayloadAction<User>) => {
    //   let { payload } = action;
    //   state.data = payload;
    // }
    userReceived: (state, action: PayloadAction<User>) => {
      state.status = AuthStateStatus.success;
      state.data = action.payload;
    },
    errorInFetch: (state, action: PayloadAction<any>) => {
      state.status = AuthStateStatus.error;
      state.erros = action.payload;
    }
  }
});

const { actions, reducer } = authSlice;

export const { fetchingUserFromGoogle, userReceived, errorInFetch } = actions;

export default reducer;
