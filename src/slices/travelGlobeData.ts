import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

import type { RootState } from 'AppRoot/store';

interface TravelLogItemBasic {
  TripName: string;
  Day: number;
  Date: string;
  StartLoc: string;
  StartLat: number;
  StartLng: number;
  EndLoc: string;
  EndLat: number;
  EndLng: number;
}

interface Sentiment {
  emoji: string;
  label: string;
  score: number;
}

interface TravelLogItem extends TravelLogItemBasic {
  WordCount: number;
  SentenceCount: number;
  CharacterCount: number;
  StartCity: string;
  StartCountry: string;
  StartCountryCode: string;
  StartState: string;
  EndCity: string;
  EndCountry: string;
  EndCountryCode: string;
  EndState: string;
  Sentiment: Array<Sentiment>;
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
        .filter((item: TravelLogItemBasic) => item.StartLoc !== item.EndLoc);

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
  TravelLogItem,
  TravelLogState,
  GlobeData,
}
