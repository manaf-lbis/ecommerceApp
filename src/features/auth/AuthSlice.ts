import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthState } from "./types";

const initialState: AuthState = {
    isAuthenticated: false,
    user: null
}


const authApi = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {

        successfullLogin: (state, action: PayloadAction<AuthState['user']>) => {
            state.isAuthenticated = true;
            state.user = action.payload;
        },

        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null
        }

    }



});

export const { successfullLogin } = authApi.actions
export default authApi.reducer