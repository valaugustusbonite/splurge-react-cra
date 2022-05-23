import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from 'store';
import logger from 'redux-logger';

const middlewares = [logger];


export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(...middlewares),
    devTools: process.env.REACT_APP_ENVIRONMENT !== 'production',
})