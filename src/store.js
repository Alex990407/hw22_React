import { configureStore } from "@reduxjs/toolkit";
import quoteReducer from "./components/features/quote/quoteSlice";

export const store = configureStore({
  reducer: {
    quote: quoteReducer, // Подключаем срез состояния
  },
});
