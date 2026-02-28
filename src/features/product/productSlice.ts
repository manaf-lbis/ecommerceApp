import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


const initialState: AuthState = {
    isAuthenticated: false,
    user: null
}


const authApi = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {

        addProduct: (state, action: PayloadAction<AuthState['user']>) => {
            state.isAuthenticated = true;
            state.user = action.payload;
        },

        removeProduct: (state) => {
            state.isAuthenticated = false;
            state.user = null
        },

        incrementQty: (state) => {
            state.isAuthenticated = false;
            state.user = null
        },

        decrementQty: (state) => {
            state.isAuthenticated = false;
            state.user = null
        }

    }



});

export const { successfullLogin } = authApi.actions
export default authApi.reducer