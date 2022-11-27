import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

import type { RootState } from 'AppRoot/store';

import type {

} from 'slices/travelLog';

interface SummaryCardData {
  currentLocations: string;
  firstDayTravelling: string;
  currentDay: number;
}

const firstDay = new Date('09/30/2021');
const today = new Date();

// The + here is to coerce the date to a number for Typescript.
const currentDay = Math.round((+today - +firstDay) / (1000*60*60*24));

const initialState: SummaryCardData = {
  currentLocation: '',
  firstDayTravelling: '09/30/2021',
  currentDay: currentDay,
};

const SummaryCardData = createSlice({
  name: 'SummaryCardData',
  initialState,
  reducers: {
    SummaryCardDataCreated(state, action: PayloadAction<TravelLogState>) {
      state.travelLocations = action.paylaod
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
  TravelLogItem,
  TravelLogState,
  GlobeData,
}
