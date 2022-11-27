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

export type {
  TravelLogItemBasic,
  TravelLogItem,
  TravelLogState,
  TravelLogBasic,
  Sentiment,
  LocationStat,
  TravelLocations,
  Location,
}
