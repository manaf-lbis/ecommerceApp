import { configureStore } from "@reduxjs/toolkit";
import authReducer from './features/auth/AuthSlice'
import authApi from "./features/auth/authApi";

const store = configureStore({

    reducer: {
        authState: authReducer,
        [authApi.reducerPath]: authApi.reducer
    },


    middleware: (defaultMiddleware) => (
        defaultMiddleware().concat(authApi.middleware)
    )

})

export default store
export type RootState = ReturnType<typeof store.getState>
