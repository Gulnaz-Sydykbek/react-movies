import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as searchBarAction from './searchBar-action';

const hide = createReducer(true, {
  [searchBarAction.searchBarHide]: (_, { payload }) => payload,
});

const searchBarReducer = combineReducers({
  hide,
});

export default searchBarReducer;
