import { createSlice } from "@reduxjs/toolkit";
import { userLogin, userRegister } from "./authSevices";

const initialState = {
  name: "",
  email: "",
  id: "",
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  extraReducers: (builder) => {
    /*  --------------------------------------------------------------------------------------------------------- */
    /* Function Pendening */
    builder.addCase(userLogin.pending, (state, { payload }) => {
      // console.log(payload);
    });
    /* Function FullFiled */
    builder.addCase(userLogin.fulfilled, (state, { payload }) => {
      // console.log(payload);
    });
    /* Function Rejected */
    builder.addCase(userLogin.rejected, (state, { payload }) => {
      // console.log(payload);
    });
    /*  --------------------------------------------------------------------------------------------------------- */
    /* Function Pendening */
    builder.addCase(userRegister.pending, (state, { payload }) => {
      // console.log(payload);
    });
    /* Function FullFiled */
    builder.addCase(userRegister.fulfilled, (state, { payload }) => {
      state.name = payload?.user?.displayName;
      state.email = payload?.user?.email;
      state.id = payload?.user?.uid;
    });
    /* Function Rejected */
    builder.addCase(userRegister.rejected, (state, { payload }) => {
      // console.log(payload);
    });
  },
});

export default authSlice.reducer;
