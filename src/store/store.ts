import { configureStore } from '@reduxjs/toolkit';
import { authenticationSlice } from 'features/login/state/login_slice';

export const store = configureStore({
    reducer: {}
})