import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import travelLog from 'slices/travelLog';

const rootReducer = combineReducers({
  travelLog: travelLog,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
