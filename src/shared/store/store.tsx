import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiProducts } from "./services/apiProducts";
import currentPageSlice from "@/pages/catalog/storeSlices/currentPageSlice";
import selectedProductReducer from "./slices/selectedProductSlice";

export const store = configureStore({
   reducer: {
      currentPage: currentPageSlice,
      selectedProduct: selectedProductReducer,
      [apiProducts.reducerPath]: apiProducts.reducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiProducts.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
