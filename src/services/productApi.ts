import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://dummyjson.com',
    }),
    endpoints: (builder) => ({

        getProducts: builder.query({
            query: ({limit,skip,}) => ({
                url: '/products',
                params:{limit,skip}
            })
        }),


    })
})

export const { useGetProductsQuery } = productApi
export default productApi