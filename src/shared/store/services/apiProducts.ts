import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiProducts = createApi({
   reducerPath: "apiProducts",
   baseQuery: fetchBaseQuery({
      baseUrl: "http://localhost:3000/",
   }),
   endpoints: (builder) => ({
      getProducts: builder.query({
         query: () => "products",
      }),
   }),
});

export const { useGetProductsQuery } = apiProducts;
