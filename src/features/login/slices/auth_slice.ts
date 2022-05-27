import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { useAppDispatch } from "common/custom_hooks/use_app_dispatch";
import { AuthActionTypes, AuthState, AuthStateStatus } from "features/login/types/auth_types";
import { User } from "features/login/types/auth_types";
import { signInWithGooglePopup } from "utils";

const initialState: AuthState = {
  status: AuthStateStatus.idle,
  data: null,
}

// const fetchUserFromGoogle = createAsyncThunk(
//   AuthActionTypes.SIGNIN_WITH_GOOGLE,
//   async (thunkAPI) => {
//     try {
//       const response = await signInWithGooglePopup();

//       return response.data;
//     } catch (error) {
      
//     }
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
    userReceived: (state, action: PayloadAction<any>) => {
      state.status = AuthStateStatus.success;
      state.data = action.payload;
    },
    errorInFetch: (state, action: PayloadAction<any>) => {
      state.status = AuthStateStatus.error;
      state.erros = action.payload;
    },
    logout: (state) => {
      state.data = null;
    }
  }
});

const { actions, reducer } = authSlice;

export const { fetchingUserFromGoogle, userReceived, errorInFetch, logout } = actions;

export default reducer;
