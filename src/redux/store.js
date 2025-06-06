import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./header/slice";
import cartReducer from "./cart/slice";

const store = configureStore({
  reducer: {
    header: headerReducer,
    cart: cartReducer,
  },
});

export default store;
