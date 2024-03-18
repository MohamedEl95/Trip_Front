import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/es/storage";

interface ClientSliceState {
  isAuth: boolean;
  email:string;
}

const initialState: ClientSliceState = {
  isAuth: false, // Default value is false
  email:"",
};

export const ClientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {
    setAuthStatus: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
  },
});

export const { setAuthStatus ,setEmail} = ClientSlice.actions;

 const ClientReducer = ClientSlice.reducer;

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

export const persistedClientReducer = persistReducer(persistConfig, ClientReducer);