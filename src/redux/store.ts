import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { sycretApi } from "./sycret-api";
import userData from "./certificates";

const rootReducer = combineReducers({
  userData,
  [sycretApi.reducerPath]: sycretApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sycretApi.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
