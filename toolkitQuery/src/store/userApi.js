import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userInfo = createApi({

    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({baseUrl : ''}),
    endpoints : (builder) => ({
        getUsers : builder.query({
            query: () => 'https://dummyjson.com/products'
        })
    }) 
})


export const {useGetUsersQuery} = userInfo