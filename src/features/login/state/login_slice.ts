import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedin: false,
}

export const authenticationSlice = createSlice({
    name: 'authentication',
    initialState: initialState,
    reducers: {}
});