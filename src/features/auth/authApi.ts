import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const authApi = createApi({
    reducerPath:'authApi',
    baseQuery:fetchBaseQuery({baseUrl:'https://dummyjson.com/auth'}),
    endpoints:(builder)=>({

        login: builder.mutation({
            query:(credentials)=>({
                url:'/login',
                methord:'POST',
                body:credentials
            })

        })

    })
})

export const {useLoginMutation} = authApi
export default authApi