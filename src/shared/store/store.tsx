import { configureStore } from "@reduxjs/toolkit";
import currentPageSlice from "@/pages/catalog/storeSlices/currentPageSlice";
import { apiProducts } from "./services/apiProducts";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
   reducer: {
      currentPage: currentPageSlice,
      [apiProducts.reducerPath]: apiProducts.reducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiProducts.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
