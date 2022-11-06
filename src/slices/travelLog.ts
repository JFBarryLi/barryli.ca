import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

import { RootState } from 'AppRoot/store';

import TravelLog from './TravelLogExample';

interface TravelLogItemBasic {
  trip: string;
  day: number;
  date: string;
  startLoc: string;
  startLat: number;
  startLng: number;
  endLoc: string;
  endLat: number;
  endLng: number;
}

interface TravelLogItem extends TravelLogItemBasic {
  wordCount: number;
  sentenceCount: number;
  characterCount: number;
}

interface TravelLogState extends Array<TravelLogItem>{}

interface TravelLogBasic extends Array<TravelLogItemBasic>{}

interface Location {
  trip: string;
  name: string;
  lat: number;
  lng: number;
}

interface LocationStat extends Location {
  days: number;
}

interface TravelLocations extends Array<LocationStat>{}

const initialState: TravelLogState = TravelLog;

const travelLog = createSlice({
  name: 'travelLog',
  initialState,
  reducers: {
    travelLogCreated: (state, action: PayloadAction<TravelLogState>) => {
      return action.payload;
    },
  }
});

const selectTravelLog = (state: RootState['travelLog']) => state;
const selectTravelLogBasic = (state: RootState['travelLog']) => (
  state.map(
    (item: TravelLogItem) => ({
      trip: item.trip, day: item.day, date: item.date,
      startLoc: item.startLoc, startLat: item.startLat, startLng: item.startLng,
      endLoc: item.endLoc, endLat: item.endLat, endLng: item.endLng,
    })
  )
);

const selectTravelPaths = createSelector(
  [selectTravelLogBasic], (tLog: TravelLogBasic) => tLog
    .filter((item: TravelLogItemBasic) => item.startLoc !== item.endLoc)
);

const selectTravelLocations = createSelector(
  [selectTravelLogBasic], (tLog: TravelLogBasic) => tLog
    .map((item: TravelLogItemBasic) => ({
      trip: item.trip, name: item.endLoc, lat: item.endLat, lng: item.endLng}))
    .filter(
      (ele: Location, index: number, array) => array.findIndex(
        (obj: Location) => (obj.name === ele.name && obj.trip === ele.trip)
      ) === index
    )
    .map((loc: Location, index: number) => ({
      trip: loc.trip,
      name: loc.name,
      lat: loc.lat,
      lng: loc.lng,
      days: tLog.filter((item: TravelLogItemBasic) => item.endLoc === loc.name).length
    }))
);

const selectLocationDaysMax = createSelector(
  [selectTravelLocations], (locations: TravelLocations) => Math.max(
    ...locations.map((loc: LocationStat) => loc.days), 0
  )
);

export const {
  travelLogCreated,
} = travelLog.actions;

export {
  selectTravelLog, selectTravelLogBasic, selectTravelPaths,
  selectTravelLocations, selectLocationDaysMax
}

export default travelLog.reducer;
