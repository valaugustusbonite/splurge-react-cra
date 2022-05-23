// a reducer is a function that takes in [state] and [action] as parameters
// returns the new state
// (previousState, action) => newState

import { AuthActionTypes } from "./auth_types";

export const authInitialState = {
    currentUser: null
}

export const authReducer = (state = authInitialState, action: any) => {
    const { type, payload } = action;

    console.log(`STATE: ${state}`);

    switch (type) {
        case AuthActionTypes.SIGNIN_WITH_GOOGLE:
            return {
                ...state,
                currentUser: payload,
            };
    
        default: return state;
    }
}