import { createSlice } from '@reduxjs/toolkit';
import * as moviesAction from './movies-action';

const initialState = {
  items: [],
  theme: false,
  searchBar: false,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  extraReducers: {
    [moviesAction.libraryMovies](state, action) {
      state.items =
        action.payload.length === 0
          ? [action.payload]
          : [action.payload, ...state.items];
    },

    [moviesAction.deleteMovies](state, action) {
      state.items = state.items.filter(({ id }) => id !== action.payload);
    },

    [moviesAction.toggleTheme](state, action) {
      state.theme = action.payload;
    },

    [moviesAction.searchBarHide](state, action) {
      state.searchBar = action.payload;
    },
  },
});

export default moviesSlice.reducer;
