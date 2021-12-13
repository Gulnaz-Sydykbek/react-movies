import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as moviesAction from './movies-action';

const items = createReducer([], {
  [moviesAction.libraryMovies]: (state, { payload }) => {
    if (payload.length === 0) {
      return [payload];
    }

    return [payload, ...state];
  },

  [moviesAction.deleteMovies]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const moviesReducer = combineReducers({
  items,
});

export default moviesReducer;
