import {combineReducers} from '@reduxjs/toolkit';
import userSlice from './slice/UserSlice';

const RootReducer = combineReducers({
  user: userSlice,
});

export type RootState = ReturnType<typeof RootReducer>;

export default RootReducer;
