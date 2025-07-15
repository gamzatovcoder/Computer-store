import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiProducts } from "./services/apiProducts";
import { apiOrders } from "./services/apiOrders";
import currentPageReducer from "@/pages/catalog/storeSlices/currentPageSlice";
import selectedProductReducer from "./slices/selectedProductSlice";
import cartProductsReducer from "./slices/cartProductsSlice";

export const store = configureStore({
   reducer: {
      currentPage: currentPageReducer,
      selectedProduct: selectedProductReducer,
      cartProducts: cartProductsReducer,
      [apiProducts.reducerPath]: apiProducts.reducer,
      [apiOrders.reducerPath]: apiOrders.reducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
         .concat(apiProducts.middleware)
         .concat(apiOrders.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
