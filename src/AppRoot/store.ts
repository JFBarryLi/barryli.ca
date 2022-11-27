import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import travelGlobeData from 'slices/travelGlobeData';
import { travelLogApi } from 'apis/travelLog';

export const store = configureStore({
  reducer: {
    travelGlobeData: travelGlobeData,
    [travelLogApi.reducerPath]: travelLogApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(travelLogApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
