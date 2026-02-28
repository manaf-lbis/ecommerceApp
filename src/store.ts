import { configureStore } from "@reduxjs/toolkit";
import authReducer from './features/auth/AuthSlice'
import authApi from "./services/authApi";
import productApi from "./services/productApi";

const store = configureStore({

    reducer: {
        authState: authReducer,

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
