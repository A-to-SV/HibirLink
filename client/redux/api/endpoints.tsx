import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { env } from 'next-runtime-env';

export const endpointsApi = createApi({
  reducerPath: 'endpointsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    userRegistration: builder.mutation({
        query: ({name, email, password}) => ({
            url: '/api/auth/register',
            method: 'POST',
            body:{
                name, 
                email, 
                password,
            }
        }),
    }),

    userLogin: builder.mutation({
        query: ({email, password}) => ({
            url: '/api/auth/login',
            method: 'POST',
            body:{
                email, 
                password,
            }
        }),
    }),

    postProduct: builder.mutation({
        query: ({name, price, image, description, contact_number, address, category}) => ({
            url: '/api/products',
            method: 'POST',
            body:{
                name, 
                price, 
                image,
                description,
                contact_number,
                address,
                category,
            }
        }),
        invalidatesTags: ['Products'],
    }),

    getAllProducts: builder.query({
        query: () => ({
            url: '/api/products',
            method: 'GET',
        }),
        providesTags: ['Products'],
    }),
  }),
});

export const {
    useUserRegistrationMutation,
    useUserLoginMutation,
    usePostProductMutation,
    useGetAllProductsQuery,
} = endpointsApi;
