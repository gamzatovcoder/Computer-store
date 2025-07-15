import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type CartProduct = {
   id: number;
   count: number;
};

type OrderType = {
   name: string;
   address: string;
   phone: number;
   productIds: CartProduct[];
};

export const apiOrders = createApi({
   reducerPath: "apiOrders",
   baseQuery: fetchBaseQuery({
      baseUrl: "http://localhost:3000/",
   }),
   endpoints: (builder) => ({
      createOrder: builder.mutation({
         query: (newOrder: OrderType) => ({
            url: "orders",
            method: "POST",
            body: newOrder,
         }),
      }),
   }),
});

export const { useCreateOrderMutation } = apiOrders;
