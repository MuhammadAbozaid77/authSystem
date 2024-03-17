import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "./firebaseConfigration";

export const userRegister = createAsyncThunk(
  "authSlice/userRegister",
  async (args, thunkAPI) => {
    const { rejectWithValue, fulfillWithValue } = thunkAPI;
    try {
      const data = await createUserWithEmailAndPassword(
        auth,
        args.userName,
        args.userPassword
      );
      console.log(data);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const userLogin = createAsyncThunk(
  "authSlice/userLogin",
  async (args, thunkAPI) => {
    const { rejectWithValue, fulfillWithValue } = thunkAPI;
    try {
      const data = await signInWithEmailAndPassword(
        auth,
        args.userName,
        args.userPassword
      );
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
// export const unSubscribe = createAsyncThunk(
//   "authSlice/unSubscribe",
//   (args, thunkAPI) => {
//     const { rejectWithValue, fulfillWithValue } = thunkAPI;
//     try {
//       const data = onAuthStateChanged(auth, args.email, args.password);
//       return fulfillWithValue(data);
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );
