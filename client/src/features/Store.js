/*import { createSlice } from "@reduxjs/toolkit";

export const storeSlice = createSlice({
  name: "recs",
  initialState: {
    num1: "",
    num2: "",
    usage: "",
    cpuBrand: "",
    moboBrand: "",
    gpuBrand: "",
    ramSize: "",
    casingBrand: "",
    psuBrand: "",
    storeType: "",
    os: "",
    type: "",
    build: "",
  },
  reducers: {
    addRec: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { addRec } = storeSlice.actions;

export default storeSlice.reducer;*/
import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  num1: "",
  num2: "",
  usage: "",
  cpuBrand: "",
  moboBrand: "",
  gpuBrand: "",
  ramSize: "",
  casingBrand: "",
  psuBrand: "",
  storeType: "",
  os: "",
  type: "",
  build: "",
};

const persistConfig = {
  key: "root", // key for the root of the storage
  storage, // use the 'storage' object from redux-persist
  // whitelist: ['recs'], // Uncomment this line if you want to persist only specific reducers
};

const storeSlice = createSlice({
  name: "recs",
  initialState,
  reducers: {
    addRec: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

const persistedReducer = persistReducer(persistConfig, storeSlice.reducer);

export const { addRec } = storeSlice.actions;

export default persistedReducer;
