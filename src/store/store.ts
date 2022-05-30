import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from 'features/login/slices/auth_slice';

const middlewares = [logger];

export const store = configureStore({
    reducer: {
        authReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(...middlewares),
    devTools: process.env.REACT_APP_ENVIRONMENT !== 'production',
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
