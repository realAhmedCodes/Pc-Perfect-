import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  modelCpu: "",
  modelGpu: "",
  modelPsu: "",
  modelRam: "",
  modelMobo: "",
  modelCase: "",
  modelStorage: "",
  
};

const persistConfig = {
  key: "root", // key for the root of the storage
  storage, // use the 'storage' object from redux-persist
  // whitelist: ['recs'], // Uncomment this line if you want to persist only specific reducers
};

const detailSlice = createSlice({
  name: "details",
  initialState,
  reducers: {
    addDetail: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});


const persistedReducer = persistReducer(persistConfig, detailSlice.reducer);

export const { addDetail } = detailSlice.actions;

export default persistedReducer;