import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import { combineReducers } from 'redux';
import authReducer from '@/redux/slice/AuthSlice';
import { encryptTransform } from 'redux-persist-transform-encrypt';

const secretKey = import.meta.env.VITE_PERSIST_SECRET_KEY;

const persistConfig = {
  key: 'root',
  storage,
  transforms: [
    encryptTransform({
      secretKey,
      onError: (error) => {
        console.error('Encryption error:', error);
      },
    }),
  ],
};

const rootReducer = combineReducers({
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export default store;