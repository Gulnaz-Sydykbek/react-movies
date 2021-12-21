import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import * as authOperations from './auth-operations';

const user = createReducer(
  { name: null, email: null },
  {
    [authOperations.register.fulfilled]: (state, action) => {
      state = action.payload.user;
    },

    [authOperations.logIn.fulfilled]: (state, action) => {
      state = action.payload.user;
    },

    [authOperations.logout.fulfilled]: state => {
      state = { name: null, email: null };
    },

    [authOperations.fetchCurrentUser.fulfilled]: (state, action) => {
      state = action.payload;
    },
  },
);

const token = createReducer(null, {
  [authOperations.register.fulfilled]: (state, action) => {
    state = action.payload.token;
  },

  [authOperations.logIn.fulfilled]: (state, action) => {
    state = action.payload.token;
  },

  [authOperations.logout.fulfilled]: state => {
    state = null;
  },
});

const isLoggedIn = createReducer(false, {
  [authOperations.register.fulfilled]: (state, action) => {
    state = true;
  },

  [authOperations.logIn.fulfilled]: (state, action) => {
    state = true;
  },

  [authOperations.logout.fulfilled]: state => {
    state = false;
  },

  [authOperations.fetchCurrentUser.fulfilled]: (state, action) => {
    state = true;
  },
});

const isFetchingCurrentUser = createReducer(false, {
  [authOperations.fetchCurrentUser.pending]: state => {
    state = true;
  },

  [authOperations.fetchCurrentUser.fulfilled]: (state, action) => {
    state = false;
  },

  [authOperations.fetchCurrentUser.rejected]: (state, action) => {
    state = false;
  },
});

const error = createReducer(false, {
  [authOperations.register.pending]: state => {
    state = null;
  },

  [authOperations.register.rejected]: (state, action) => {
    toast.error(action.payload);
  },

  [authOperations.logIn.pending]: state => {
    state = null;
  },

  [authOperations.logIn.rejected]: (state, action) => {
    toast.error(action.payload);
  },
});

const authReducer = combineReducers({
  user,
  token,
  isLoggedIn,
  isFetchingCurrentUser,
  error,
});

export default authReducer;
