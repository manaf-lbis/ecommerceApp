import { configureStore } from "@reduxjs/toolkit";
import authReducer from './features/auth/AuthSlice'
import authApi from "./services/authApi";
import productApi from "./services/productApi";
import cartReducer from './features/cart/cartSlice'

const store = configureStore({

    reducer: {
        authState: authReducer,
        cartState : cartReducer,

        [authApi.reducerPath]: authApi.reducer,
        [productApi.reducerPath]: productApi.reducer
    },


    middleware: (defaultMiddleware) => (
        defaultMiddleware().concat(
            authApi.middleware,
            productApi.middleware)
    )

})

export default store
export type RootState = ReturnType<typeof store.getState>
