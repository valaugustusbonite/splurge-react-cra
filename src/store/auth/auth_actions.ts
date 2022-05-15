// action is an object with a type property
// action creators are functions that return actions

import { AuthActionTypes } from "./auth_types";

export const loginWithMobile = ()=> {
    return {
        type: AuthActionTypes.REGISTER_WITH_NUMBER
    };
}
