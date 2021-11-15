import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as themeAction from './theme-action';

const toggle = createReducer(false, {
  [themeAction.toggleTheme]: (_, { payload }) => payload,
});

const themeReducer = combineReducers({
  toggle,
});

export default themeReducer;
