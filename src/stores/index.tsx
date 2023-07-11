import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {logger} from 'redux-logger';
import createDebugger from 'redux-flipper';

import {api} from './apiSlice';
import citiesReducer from './citiesSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
};

export const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  cities: citiesReducer,
});

export type IRootState = ReturnType<typeof store.getState>;

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  devTools: __DEV__,
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }).concat(
    api.middleware,
    // logger,
    createDebugger(),
  ),
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);

export default store;

// * for reset all reducer state
// persistor.purge();
