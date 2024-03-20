import type { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { AppDispatch } from "@/store";

const initalTransactionsState = {};

const transactionSlice = createSlice({
  name: "transactions",
  initialState: initalTransactionsState,
  reducers: {},
});

export const {} = transactionSlice.actions;
export default transactionSlice.reducer;
