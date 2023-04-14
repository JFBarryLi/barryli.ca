import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
  currentLocation: string;
  firstDayTravelling: string;
  currentDay: number;
}

interface TravelLog {
  travelLogData: TravelLogData,
  globeData: GlobeData,
	summaryCardData: SummaryCardData,
}

const firstDay = new Date('09/30/2021');
const today = new Date();

// The + here is to coerce the date to a number for Typescript.
const currentDay = Math.round((+today - +firstDay) / (1000*60*60*24));

const initialState: TravelLog = {
  travelLogData: [],
  globeData: {  
    travelPaths: [],
    travelLocations: [],
    maxDays: 0,
  },
	summaryCardData: {
		currentLocation: '',
		firstDayTravelling: '9/30/2021',
		currentDay: currentDay,
	},
};

const travelLog = createSlice({
  name: 'travelLog',
  initialState,
  reducers: {
    travelLogCreated(state, action: PayloadAction<TravelLogData>) {
      state.travelLogData = action.payload;
    },

    globeDataCreated(state) {
      const travelLogBasic = state.travelLogData
        .map(
        (item: TravelLogItem) => ({
          TripName: item.TripName, Day: item.Day, Date: item.Date,
          StartLoc: item.StartLoc, StartLat: item.StartLat, StartLng: item.StartLng,
          EndLoc: item.EndLoc, EndLat: item.EndLat, EndLng: item.EndLng,
        })
      );

      state.globeData.travelPaths = travelLogBasic
        .filter((item: TravelLogItemBasic) => item.StartLoc !== item.EndLoc)

      state.globeData.travelLocations = travelLogBasic
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

      state.globeData.maxDays = Math.max(
        ...state.globeData.travelLocations.map((loc: LocationStat) => loc.days), 0
      );
    },

    summaryCardDataCreated(state) {
      let latestEntryDay = Math.max(...state.travelLogData.map((o: TravelLogItem) => o.Day));
      state.summaryCardData.currentLocation = state.travelLogData
        .filter((o: TravelLogItem) => o.Day === latestEntryDay)[0].EndLoc
    },
  }
});

export const {
  travelLogCreated,
	globeDataCreated,
  summaryCardDataCreated,
} = travelLog.actions;

export const selectTravelLog = (state: RootState) => state.travelLog.travelLogData;
export const selectGlobeData = (state: RootState) => state.travelLog.globeData;
export const selectSummaryCardData = (state: RootState) => state.travelLog.summaryCardData;

export default travelLog.reducer;

export type {
  TravelLogItemBasic,
  TravelLogItem,
  TravelLogData,
  TravelLogBasic,
  GlobeData,
  SummaryCardData,
}
