import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './movies/movies-reducer';

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
