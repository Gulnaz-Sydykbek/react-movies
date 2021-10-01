import { createAsyncThunk } from '@reduxjs/toolkit';
import * as moviesAPI from '../../service/movies-api';

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async (name, { rejectWithValue }) => {
    try {
      const movies = await moviesAPI.fetchMoviesByName(name);
      return movies;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
