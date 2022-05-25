import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from 'store';
import logger from 'redux-logger';
import authReducer from 'features/login/slices/auth_slice';
import { useDispatch } from 'react-redux';

const middlewares = [logger];

export const store = configureStore({
    reducer: {
        authReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }).concat(...middlewares),
    devTools: process.env.REACT_APP_ENVIRONMENT !== 'production',
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
