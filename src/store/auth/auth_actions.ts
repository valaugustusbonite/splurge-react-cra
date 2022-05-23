import { createAction } from "@reduxjs/toolkit";
import { AuthActionTypes } from "./auth_types";

export const signInWithGoogleAction = (user?: any) => {
    return createAction(
        AuthActionTypes.SIGNIN_WITH_GOOGLE,
        user
    );
}
