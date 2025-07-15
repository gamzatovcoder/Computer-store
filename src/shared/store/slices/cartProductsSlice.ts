import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/shared/store/store";

type CartProdutsState = {
   id: number | null;
   count: number | null;
};

const initialState: CartProdutsState[] = [];

export const cartProductsSlice = createSlice({
   name: "cartProducts",
   initialState,
   reducers: {
      addCartProductById: (state, action: PayloadAction<number>) => {
         const existingProduct = state.find(
            (product) => product.id === action.payload,
         );
         if (!existingProduct) {
            state.push({ id: action.payload, count: 1 });
         }
      },
      incrementCartProductById: (state, action: PayloadAction<number>) => {
         const stateItemIndex = state.findIndex(
            (item) => item.id === action.payload,
         );
         state[stateItemIndex].count += 1;
      },
      decrementCartProductById: (state, action: PayloadAction<number>) => {
         const stateItemIndex = state.findIndex(
            (item) => item.id === action.payload,
         );
         if (state[stateItemIndex].count > 1) {
            state[stateItemIndex].count -= 1;
         }
      },
      deleteCartProductById: (state, action: PayloadAction<number>) => {
         const index = state.findIndex(
            (product) => product.id === action.payload,
         );
         if (index !== -1) {
            state.splice(index, 1);
         }
      },
   },
});

export const {
   addCartProductById,
   incrementCartProductById,
   decrementCartProductById,
   deleteCartProductById,
} = cartProductsSlice.actions;

export const cartProducts = (state: RootState) => state.cartProducts;

export default cartProductsSlice.reducer;
