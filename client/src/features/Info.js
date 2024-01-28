/*import { createSlice } from "@reduxjs/toolkit";
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
  // whitelist: ['infos'], // Uncomment this line if you want to persist only specific reducers
};

const infoSlice = createSlice({
  name: "infos",
  initialState,
  reducers: {
    addInfo: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

const infoReducer = persistReducer(persistConfig, infoSlice.reducer); // Fix here

export const { addInfo } = infoSlice.actions;

export default infoReducer;
*/