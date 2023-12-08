// store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice"; // Import the reducer, not the slice

export const store = configureStore({
  reducer: {
    user: userReducer, // Pass the reducer, not the slice itself
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
