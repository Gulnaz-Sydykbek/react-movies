import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { fetchMovies } from './movies-operations';

const entities = createReducer([], {
  [fetchMovies.fulfilled]: (_, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [fetchMovies.pending]: () => true,
  [fetchMovies.fulfilled]: () => false,
  [fetchMovies.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchMovies.rejected]: (_, { payload }) => payload,
  [fetchMovies.pending]: () => null,
});

const moviesReducer = combineReducers({
  entities,
  isLoading,
  error,
});

export default moviesReducer;
