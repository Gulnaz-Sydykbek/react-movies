import { createAction } from '@reduxjs/toolkit';

export const libraryMovies = createAction('movies/LibraryMovies');

export const deleteMovies = createAction('movies/DeleteMovies');

export const toggleTheme = createAction('movies/ToggleTheme');

export const searchBarHide = createAction('movies/SearchBarHide');
