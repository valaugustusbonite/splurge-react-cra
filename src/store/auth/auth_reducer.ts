// a reducer is a function that takes in [state] and [action] as parameters
// returns the new state
// (previousState, action) => newState

import { AuthActionTypes } from "./auth_types";

const authInitialState = {
    numOfCakes: 10,
}

const authReducer = (state = authInitialState, action: any) => {
    switch (action.type) {
        case AuthActionTypes.REGISTER_WITH_NUMBER:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1,
            };
    
        default: return state;
    }
}

export default authReducer;