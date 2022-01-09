import {combineReducers} from 'redux';
import userReducer from './userSlice';
import memoReducer from './memoSlice';

export const rootReducer = combineReducers({
  user: userReducer,
  memo: memoReducer,
});
