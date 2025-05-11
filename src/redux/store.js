import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./contacts/slice";
import { filterReducer } from "./filters/slice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
  import storage from 'redux-persist/lib/storage';
import { authReducer } from "./auth/slice";



  const persistConfig = {
    key: 'root-auth',
    version: 1,
    storage,
    whitelist: ['token'],
  };

  const persistedReducerAuth = persistReducer(persistConfig, authReducer);
  
  const persistedReducerContact = persistReducer(persistConfig, contactReducer);
  const persistConfigFilter = {
    key: 'filter',
    version: 1,
    storage,
  };
  const persistedReducerFilter = persistReducer(persistConfigFilter, filterReducer);

 export  const store = configureStore({
reducer: {
    contacts: persistedReducerContact,
    filter: persistedReducerFilter,
    auth: persistedReducerAuth,
},
middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
    //devTools: import.meta.env.MODE === 'development',
 });
 export let persistor = persistStore(store);
