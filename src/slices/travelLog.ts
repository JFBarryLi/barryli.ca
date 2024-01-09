import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';

import type { RootState } from 'AppRoot/store';

import haversineDistance from 'utils/haversine';

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
  name: string;
  lat: number;
  lng: number;
}

interface LocationStat extends Location {
  days: number;
  numVisits: number;
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

interface LocationGraphNodeData {
  numVisits: number;
  days: number;
}

interface LocationGraphNode {
  id: string;
  label: string;
  size: number;
  labelVisible?: boolean;
  data: LocationGraphNodeData;
}

interface LocationGraphNodes extends Array<LocationGraphNode> {}

interface LocationGraphLinkDataVisit {
  day: number;
  date: string;
  StartLoc: string;
  EndLoc: string;
}

interface LocationGraphLinkData {
  visits: Array<LocationGraphLinkDataVisit>
}

interface LocationGraphLink {
  id: string;
  label: string;
  size: number;
  source: string;
  target: string;
  data: LocationGraphLinkData;
}

interface LocationGraphLinks extends Array<LocationGraphLink> {}

interface CountryDays {
  [key: string]: number;
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
      if (action.payload !== undefined) {
        state.travelLogData = action.payload;
      }
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
      name: item.EndLoc, lat: item.EndLat, lng: item.EndLng}))
    .filter(
      (ele: Location, index: number, array: Array<Location>) => array.findIndex(
        (obj: Location) => (obj.name === ele.name)
      ) === index
    )
    .map((loc: Location, index: number) => ({
      name: loc.name,
      lat: loc.lat,
      lng: loc.lng,
      days: travelLogBasic.filter(
        (item: TravelLogItemBasic) => item.EndLoc === loc.name
      ).length,
      numVisits: travelLogBasic.filter(
        (item: TravelLogItemBasic) => item.EndLoc === loc.name && item.StartLoc !== loc.name
      ).length
    }))
);

export const selectMaxDays = createSelector([selectTravelLocations], travelLocations =>
  Math.max(
    ...travelLocations.map((loc: LocationStat) => loc.days), 0
  )
);

export const selectLatestDay = createSelector(
  [selectTravelLog],
  travelLog => {
    if (travelLog.length !== 0) {
      const latestEntryDay = Math.max(...travelLog.map((o: TravelLogItem) => o.Day));
      return latestEntryDay;
    } else {
      return undefined;
    }
  }
);

export const selectCurrentLocation = createSelector(
  [selectTravelLog],
  travelLog => {
    if (travelLog.length !== 0) {
      const latestEntryDay = Math.max(...travelLog.map((o: TravelLogItem) => o.Day));
      const currentLocation = travelLog
        .filter((o: TravelLogItem) => o.Day === latestEntryDay)[0].EndLoc;
      return currentLocation;
    } else {
      return undefined;
    }
  }
);

export const selectCountryCount = createSelector(
  [selectTravelLog],
  travelLog => {
    if (travelLog.length !== 0) {
      return new Set(
        travelLog.map((o: TravelLogItem) => o.EndCountry)
      ).size
    } else {
      return undefined;
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
      return undefined;
    }
  }
);

export const selectTotalHaversineDistance = createSelector(
  [selectTravelPaths],
  travelPaths => {
    if (travelPaths.length !== 0) {
      return travelPaths.reduce((accum, tPath) => {
        return accum + haversineDistance(
          tPath.StartLat,
          tPath.StartLng,
          tPath.EndLat,
          tPath.EndLng,
        )
      }, 0)
    } else {
      return undefined;
    }
  }
);

export const selectCountryByDays = createSelector(
  [selectTravelLog],
  travelLog => {
    if (travelLog.length !== 0) {
      return travelLog.reduce((acc: any, curr) => {
        acc[curr['EndCountry']] = (acc[curr['EndCountry']] ?? 0) + 1;
        return acc;
      }, {});
    } else {
      return {};
    }
  }
);

export const selectPlaceByDays = createSelector(
  [selectTravelLog],
  travelLog => {
    if (travelLog.length !== 0) {
      return travelLog.reduce((acc: any, curr) => {
        acc[curr['EndLoc']] = (acc[curr['EndLoc']] ?? 0) + 1;
        return acc;
      }, {});
    } else {
      return {};
    }
  }
);

export const selectMaxDate = createSelector(
  [selectTravelLog],
  travelLog => {
    if (travelLog.length !== 0) {
      const maxDate = new Date(Math.max(
        ...travelLog.map((o: TravelLogItem) => new Date(o.Date).getTime())
      )).toISOString().split('T')[0];
      return maxDate;
    } else {
      return '2023-12-31';
    }
  }
);

export const selectMinDate = createSelector(
  [selectTravelLog],
  travelLog => {
    if (travelLog.length !== 0) {
       const minDate = new Date(Math.min(
        ...travelLog.map((o: TravelLogItem) => new Date(o.Date).getTime())
       )).toISOString().split('T')[0];
      return minDate
    } else {
      return '2019-09-30';
    }
  }
);

export const selectWordCountByDate = createSelector(
  [selectTravelLog],
  travelLog => {
    if (travelLog.length !== 0) {
      return travelLog.map(
        (o: TravelLogItem) => ({'value': o.WordCount, 'day': o.Date})
      );
    } else {
      return [];
    }
  }
);

export const selectLocationGraphNodes = createSelector(
  [selectTravelLocations],
  travelLocations => {
    if (travelLocations.length !== 0) {
      return travelLocations.map(
        (o: LocationStat) => ({
          'id': o.name,
          label: o.name,
          size: o.numVisits,
          labelVisible: true,
          data: {numVisits: o.numVisits, days: o.days}
        })
      );
    } else {
      return [];
    }
  }
);

export const selectLocationGraphLinks = createSelector(
  [selectTravelLogBasic],
  travelLogBasic => {
    if (travelLogBasic.length !== 0) {
      return travelLogBasic.filter(
        (item: TravelLogItemBasic) => item.StartLoc !== item.EndLoc
      ).filter(
        (
          item: TravelLogItemBasic,
          index: number,
          array: Array<TravelLogItemBasic>
        ) => array.findIndex(
          (obj: TravelLogItemBasic) => (
            obj.StartLoc === item.StartLoc && obj.EndLoc === item.EndLoc
          )
        ) === index
      ).map(
        (item: TravelLogItemBasic) => {
          const visits = travelLogBasic.filter(
            (o: TravelLogItemBasic) => o.StartLoc === item.StartLoc && o.EndLoc === item.EndLoc 
          ).map(
            (obj: TravelLogItemBasic) => ({
              day: obj.Day,
              date: obj.Date,
              StartLoc: obj.StartLoc,
              EndLoc: obj.EndLoc
            })
          );

          return {
            id: item.StartLoc + '-->' + item.EndLoc,
            label: item.StartLoc + '-->' + item.EndLoc,
            size: visits.length * 3,
            source: item.StartLoc,
            target: item.EndLoc,
            data: {visits: visits}
          }
        }
      );
    } else {
      return [];
    }
  }
);

export const selectCountryStats = createSelector(
  [selectTravelLog],
  travelLog => {
    if (travelLog.length !== 0) {
      const countryDays: CountryDays = travelLog.reduce((acc: any, curr) => {
        acc[curr['EndCountry']] = (acc[curr['EndCountry']] ?? 0) + 1;
        return acc;
      }, {});

      const countries = Object.fromEntries(travelLog.map(
        (tLog: TravelLogItem) => ([tLog.EndCountry, tLog.EndCountryCode])
      ));
      
      const countryStats = Object.entries(countryDays).map(([k, v]) => (
        {'countryName': k, 'countryCode': countries[k], 'daysSpent': v}
      ));

      return countryStats;
    } else {
      return [];
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
  LocationGraphNodes,
  LocationGraphLinks,
};
