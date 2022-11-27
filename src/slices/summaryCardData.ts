import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from 'AppRoot/store';

import type {
  TravelLogItem,
  TravelLogState,
} from 'slices/travelLog';

interface SummaryCardData {
  currentLocation: string;
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

const summaryCardData = createSlice({
  name: 'SummaryCardData',
  initialState,
  reducers: {
    summaryCardDataCreated(state, action: PayloadAction<TravelLogState>) {
      let latestEntryDay = Math.max(...action.payload.map((o: TravelLogItem) => o.Day));
      state.currentLocation = action.payload
        .filter((o: TravelLogItem) => o.Day === latestEntryDay)[0].EndLoc
    }
  }
});

export const {
  summaryCardDataCreated,
} = summaryCardData.actions;

export const selectSummaryCardData = (state: RootState) => state.summaryCardData;

export default summaryCardData.reducer;

export type {
  SummaryCardData,
}
