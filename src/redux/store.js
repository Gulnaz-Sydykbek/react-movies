import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
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

import moviesReducer from './movies/movies-reducer';
import authReducer from './auth/auth-slice';
import themeReducer from './theme/theme-reducer';
import searchBarReducer from './searchBar/searchBar-reducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const moviesPersistConfig = {
  key: 'movies',
  storage,
  whitelist: ['items'],
};

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const themePersistConfig = {
  key: 'theme',
  storage,
  whitelist: ['toggle'],
};

const searchBarPersistConfig = {
  key: 'searchBar',
  storage,
  whitelist: ['hide'],
};

export const store = configureStore({
  reducer: {
    movies: persistReducer(moviesPersistConfig, moviesReducer),
    auth: persistReducer(authPersistConfig, authReducer),
    theme: persistReducer(themePersistConfig, themeReducer),
    searchBar: persistReducer(searchBarPersistConfig, searchBarReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
