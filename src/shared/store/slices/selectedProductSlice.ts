import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/shared/store/store";

interface SelectedProductState {
   value: number;
}

const initialState: SelectedProductState = {
   value: 1,
};

export const selectedProductSlice = createSlice({
   name: "selectedProduct",
   initialState,
   reducers: {
      setSelectedProduct: (state, action: PayloadAction<number>) => {
         state.value = action.payload;
      },
   },
});

export const { setSelectedProduct } = selectedProductSlice.actions;

export const selectProduct = (state: RootState) => state.selectedProduct.value;

export default selectedProductSlice.reducer;
