import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import cartSlice from "./cartSlice";
import productSlide from "./productSlide";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  storage,
  // whitelist: ["todos"],
};
const rootReducer = combineReducers({
  cart: cartSlice,
  products: productSlide,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
});
export const persistor = persistStore(store);
