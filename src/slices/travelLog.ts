import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';

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

interface TravelLogData extends Array<TravelLogItem>{}

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

interface TravelLog {
  travelLogData: TravelLogData,
}

interface GlobeData {
  travelPaths: TravelLogBasic;
  travelLocations: TravelLocations;
  maxDays: number;
}

interface SummaryCardData {
  currentLocation: string | undefined | JSX.Element;
  currentDay: number;
  countryCount: number | undefined;
}

interface TravelLog {
  travelLogData: TravelLogData;
}

const initialState: TravelLog = {
  travelLogData: [],
};

const travelLog = createSlice({
  name: 'travelLog',
  initialState,
  reducers: {
    travelLogCreated(state, action: PayloadAction<TravelLogData>) {
      state.travelLogData = action.payload;
    },
  }
});

export const {
  travelLogCreated,
} = travelLog.actions;

export const selectTravelLog = (state: RootState) => state.travelLog.travelLogData;

const selectTravelLogBasic = createSelector([selectTravelLog], travelLog =>
  travelLog.map(
    (item: TravelLogItem) => ({
      TripName: item.TripName, Day: item.Day, Date: item.Date,
      StartLoc: item.StartLoc, StartLat: item.StartLat, StartLng: item.StartLng,
      EndLoc: item.EndLoc, EndLat: item.EndLat, EndLng: item.EndLng,
    })
  )
);

export const selectTravelPaths = createSelector(
  [selectTravelLogBasic], travelLogBasic =>
  travelLogBasic.filter(
    (item: TravelLogItemBasic) => item.StartLoc !== item.EndLoc
  )
);

export const selectTravelLocations = createSelector(
  [selectTravelPaths, selectTravelLogBasic],
  (travelPaths, travelLogBasic) => travelPaths
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
    }))
);

export const selectMaxDays = createSelector([selectTravelLocations], travelLocations =>
  Math.max(
    ...travelLocations.map((loc: LocationStat) => loc.days), 0
  )
);

export const selectCurrentLocation = createSelector(
  [selectTravelLog],
  travelLog => {
    if (travelLog.length !== 0) {
      const latestEntryDay = Math.max(...travelLog.map((o: TravelLogItem) => o.Day));
      const currentLocation = travelLog
        .filter((o: TravelLogItem) => o.Day === latestEntryDay)[0].EndLoc;
      return currentLocation
    } else {
      return undefined
    }
  }
);

export const selectCountryCount = createSelector(
  [selectTravelLog],
  travelLog => {
    if (travelLog.length !== 0) {
      return  new Set(
        travelLog.map((o: TravelLogItem) => o.EndCountry)
      ).size
    } else {
      return undefined
    }
  }
);

export const selectWordCount = createSelector(
  [selectTravelLog],
  travelLog => {
    if (travelLog.length !== 0) {
      return travelLog.reduce((accum, tLog) => {
        return accum + tLog.WordCount;
      }, 0)
    } else {
      return undefined
    }
  }
);

export default travelLog.reducer;

export type {
  TravelLogItemBasic,
  TravelLogItem,
  TravelLogData,
  TravelLogBasic,
  GlobeData,
  SummaryCardData,
}
