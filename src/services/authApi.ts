import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const authApi = createApi({
    reducerPath:'authApi',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://dummyjson.com/auth',
        // credentials:'include'
    }),
    endpoints:(builder)=>({

        login: builder.mutation<any, {username:string,password:string}>({
            query:(credentials) =>({
                url:'/login',
                method:'POST',
                body:credentials
            })
        }),


    })
})

export const {useLoginMutation} = authApi
export default authApi