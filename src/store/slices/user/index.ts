import type { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { AppDispatch } from "@/store";

const initalUserState = {
  firstname: "",
  lastname: "",
  email: "",
  id: "",
};

const transactionSlice = createSlice({
  name: "user",
  initialState: initalUserState,
  reducers: {
    updateUserData: (state, action: PayloadAction<any>) => {
      const { firstname, lastname, email, id } = action.payload;
      state.firstname = firstname;
      state.lastname = lastname;
      state.email = email;
      state.id = id;
    },
    clearUserData: (state) => {
      state.firstname = "";
      state.lastname = "";
      state.email = "";
      state.id = "";
    },
  },
});

export const { updateUserData, clearUserData } = transactionSlice.actions;
export default transactionSlice.reducer;
