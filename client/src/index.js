import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Use local storage as the default storage engine
import { PersistGate } from "redux-persist/integration/react";
import detailReducer from "./features/Details";
import recomReducers from "./features/Store";

const persistConfig = {
  key: "root",
  storage,
};

//const persistedReducer = persistReducer(persistConfig, recomReducers);

const store = configureStore({
  reducer: {
    recs: recomReducers,
    details: detailReducer,
  },
});

const persistor = persistStore(store);
const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
