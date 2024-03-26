import { ROOT_DATA_KEY } from "@/constants";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import transactionReducer from "./slices/transaction";
import userReducer from "./slices/user";

const rootPersistConfig = {
  key: ROOT_DATA_KEY,
  storage,
};

const combinedReducers = combineReducers({
  transactions: transactionReducer,
  user: userReducer,
});

const rootReducer: typeof combinedReducers = (state, action) => {
  if (action.type === "user/clearUserData") {
    storage.removeItem("persist:" + ROOT_DATA_KEY);
    return combinedReducers(undefined, action);
  }
  return combinedReducers(state, action);
};

const persistedReducers = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store, {}, function () {
  persistor.persist();
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
