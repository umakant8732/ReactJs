import { apiSlice } from "./apiSlice";

const USER_URL = "/api/user/";

export const usersApislice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}loginUser`,
                method: "POST",
                body: data
            })
        }),

        logout: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}logoutUser`,
                method: "POST",
            })
        }),

        register: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}registerUser`,
                method: "POST",
                body: data
            })
        }),

        updateProfile: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}profile`,
                method: "PUT",
                body: data,
               
            })
        })

    })
})

export const { useLoginMutation, useLogoutMutation, useRegisterMutation, useUpdateProfileMutation } = usersApislice;




