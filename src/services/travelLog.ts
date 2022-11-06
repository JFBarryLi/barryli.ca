import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const travelLogApi = createApi({
  reducerPath: 'travelLogApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.barryli.ca/travel_log/' }),
  endpoints: (builder) => ({
    getTravelLogByTripName: builder.query({
      query: (tripName: string) => `trip/${tripName}`,
    }),
  }),
});

export const { useGetTravelLogByTripNameQuery } = travelLogApi;
