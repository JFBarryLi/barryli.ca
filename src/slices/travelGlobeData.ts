import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from 'AppRoot/store';

import type {
  TravelLogState,
  TravelLogItem,
  TravelLogItemBasic,
  TravelLogBasic,
  TravelLocations,
  Location,
  LocationStat,

} from 'slices/travelLog';

interface GlobeData {
  travelPaths: TravelLogBasic;
  travelLocations: TravelLocations;
  maxDays: number;
}

const initialState: GlobeData = {
  travelPaths: [],
  travelLocations: [],
  maxDays: 0,
};

const travelGlobeData = createSlice({
  name: 'travelGlobeData',
  initialState,
  reducers: {
    globeDataCreated(state, action: PayloadAction<TravelLogState>) {
      const travelLogBasic = action.payload
        .map(
        (item: TravelLogItem) => ({
          TripName: item.TripName, Day: item.Day, Date: item.Date,
          StartLoc: item.StartLoc, StartLat: item.StartLat, StartLng: item.StartLng,
          EndLoc: item.EndLoc, EndLat: item.EndLat, EndLng: item.EndLng,
        })
      );

      state.travelPaths = travelLogBasic
        .filter((item: TravelLogItemBasic) => item.StartLoc !== item.EndLoc)

      state.travelLocations = travelLogBasic
        .map((item: TravelLogItemBasic) => ({
          trip: item.TripName, name: item.EndLoc, lat: item.EndLat, lng: item.EndLng}))
        .filter(
          (ele: Location, index: number, array: Array<Location>) => array.findIndex(
            (obj: Location) => (obj.name === ele.name && obj.trip === ele.trip)
          ) === index
        )
        .map((loc: Location, index: number) => ({
          trip: loc.trip,
          name: loc.name,
          lat: loc.lat,
          lng: loc.lng,
          days: travelLogBasic.filter((item: TravelLogItemBasic) => item.EndLoc === loc.name).length
        }));

      state.maxDays = Math.max(
        ...state.travelLocations.map((loc: LocationStat) => loc.days), 0
      );
    }
  }
});

export const {
  globeDataCreated,
} = travelGlobeData.actions;

export const selectGlobeData = (state: RootState) => state.travelGlobeData;

export default travelGlobeData.reducer;

export type {
  GlobeData,
}
