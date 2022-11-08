import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const travelLogApi = createApi({
  reducerPath: 'travelLogApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.barryli.ca/travel_log/',
    prepareHeaders: (headers, { getState }) => {
      headers.set('X-Api-Key', process.env.REACT_APP_TRAVELLOG_API_KEY as string);
      return headers
    }
  }),
  endpoints: (builder) => ({
    getTravelLogByTripName: builder.query({
      query: (tripName: string) => `trips/${tripName}`,
    }),
  }),
});

export const { useGetTravelLogByTripNameQuery } = travelLogApi;
