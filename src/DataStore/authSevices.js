import { createAsyncThunk } from '@reduxjs/toolkit';
import {createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged ,  signOut} from "firebase/auth";



export const userRegister = createAsyncThunk("authSlice/userRegister" , (args , thunkAPI)=>{
    const { rejectWithValue , fulfillWithValue}  = thunkAPI;
    try {
        const data = createUserWithEmailAndPassword(args.email , args.password);
        return fulfillWithValue(data);
    }
    catch (error){
        return rejectWithValue(error);
    }

});

export const userLogin = createAsyncThunk("authSlice/userLogin" , (args , thunkAPI)=>{
    const { rejectWithValue , fulfillWithValue}  = thunkAPI;
    try {
        const data = fetch("");
        return fulfillWithValue(data);
    }
    catch (error){
        return rejectWithValue(error);
    }

});