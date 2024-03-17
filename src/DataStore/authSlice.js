import {createSlice } from '@reduxjs/toolkit';
import { userLogin, userRegister } from './authSevices';

const initialState = {
    name : ""

};

const authSlice = createSlice({
    name : "authSlice" , 
    initialState ,
    extraReducers : 
    (builder) => {

        /*  --------------------------------------------------------------------------------------------------------- */
        /* Function Pendening */
        builder.addCase(userLogin.pending, (state, {payload}) => {
            // console.log(payload);
        });
        /* Function FullFiled */
        builder.addCase(userLogin.fulfilled, (state, {payload}) => {
            // console.log(payload);
        });
        /* Function Rejected */
        builder.addCase(userLogin.rejected, (state, {payload}) => {
            // console.log(payload);
        });
        /*  --------------------------------------------------------------------------------------------------------- */
        /* Function Pendening */
        builder.addCase(userRegister.pending, (state, {payload}) => {
            // console.log(payload);
        });
        /* Function FullFiled */
        builder.addCase(userRegister.fulfilled, (state, {payload}) => {
            // console.log(payload);
        });
        /* Function Rejected */
        builder.addCase(userRegister.rejected, (state, {payload}) => {
            // console.log(payload);
        });




      },

});

export default authSlice.reducer;
