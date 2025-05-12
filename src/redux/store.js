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


const createPersistedReducer = (reducer, config) => persistReducer(config, reducer);

  const persistConfig = {
    key: 'root-auth',
    version: 1,
    storage,
    whitelist: ['token'],
  };
  const persistConfigFilter = {
    key: 'filter',
    version: 1,
    storage,
  };
const persistedReducerAuth = createPersistedReducer(authReducer, persistConfig);
const persistedReducerContact = createPersistedReducer(contactReducer, persistConfig); 
const persistedReducerFilter = createPersistedReducer(filterReducer, persistConfigFilter);

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
