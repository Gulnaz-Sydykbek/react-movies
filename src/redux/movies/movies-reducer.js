import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as moviesAction from './movies-action';

const items = createReducer([], {
  [moviesAction.libraryMovies]: (state, { payload }) => {
    const addSameId = state.map(({ id }) => id).includes(payload.id);
    if (!addSameId) {
      return [payload, ...state];
    }
  },

  [moviesAction.deleteMovies]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const moviesReducer = combineReducers({
  items,
});

export default moviesReducer;
