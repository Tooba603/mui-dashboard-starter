import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
// Use ESM entry so Vite applies the default export (CJS `lib/storage` can interop wrong → missing getItem/setItem).
import persistStorage from "redux-persist/es/storage";
import userReducer from "./slices/userSlice";
import uiReducer from "./slices/uiSlice";

const storage = persistStorage?.default ?? persistStorage;

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "ui"],
};

const rootReducer = combineReducers({
  user: userReducer,
  ui: uiReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
