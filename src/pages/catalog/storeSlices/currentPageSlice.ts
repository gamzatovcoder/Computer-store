import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/shared/store/store";

interface CurrentPageState {
   value: number;
}

const initialState: CurrentPageState = {
   value: 1,
};

export const currentPageSlice = createSlice({
   name: "currentPage",
   initialState,
   reducers: {
      setCurrentPage: (state, action: PayloadAction<number>) => {
         state.value = action.payload;
      },
   },
});

export const { setCurrentPage } = currentPageSlice.actions;

export const selectPage = (state: RootState) => state.currentPage.value;

export default currentPageSlice.reducer;
