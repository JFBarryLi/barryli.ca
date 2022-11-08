import { RootState } from 'AppRoot/store';

import travelLog, {
  selectTravelLog, selectTravelLogBasic, selectTravelPaths,
  selectTravelLocations, selectLocationDaysMax,
  travelLogCreated
} from '../travelLog';

import TravelLogExample from '../TravelLogExample';

describe('travelLog reducers', () => {
	it('should handle initial state', () => {
    expect(travelLog([], {
      type: travelLogCreated.type,
      payload: []
    })).toEqual([]);
	});

  it('should handle travelLogCreated', () => {
    expect(travelLog([], {
      type: travelLogCreated.type,
      payload: TravelLogExample
    })).toEqual(TravelLogExample);
  });

  it('should handle travelLogCreated replacing existing state', () => {
    expect(travelLog([TravelLogExample[0]], {
      type: travelLogCreated.type,
      payload: TravelLogExample
    })).toEqual(TravelLogExample);
  });
});

describe('selectTravelLog', () => {
  it('should select travel log', () => {
    expect(selectTravelLog({'travelLog': TravelLogExample} as RootState)).toEqual(TravelLogExample);
  });

  it('should select travel log basic version', () => {
    expect(selectTravelLogBasic({'travelLog': [{
      trip: 'a', day: 1, date: '2000-01-01',
      startLoc: 'NY', startLat: 123, startLng: 123,
      endLoc: 'NJ', endLat: 321, endLng: 321,
      wordCount: 100, sentenceCount: 10, characterCount: 1000
    }]} as RootState)).toEqual([{
      trip: 'a', day: 1, date: '2000-01-01',
      startLoc: 'NY', startLat: 123, startLng: 123,
      endLoc: 'NJ', endLat: 321, endLng: 321
    }]);
  });

  it('should select travel log path', () => {
    expect(selectTravelPaths({'travelLog': [{
      trip: 'a', day: 1, date: '2000-01-01',
      startLoc: 'NY', startLat: 123, startLng: 123,
      endLoc: 'NJ', endLat: 321, endLng: 321,
      wordCount: 100, sentenceCount: 10, characterCount: 1000
    },{
      trip: 'a', day: 2, date: '2000-01-02',
      startLoc: 'NJ', startLat: 123, startLng: 123,
      endLoc: 'NJ', endLat: 321, endLng: 321,
      wordCount: 100, sentenceCount: 10, characterCount: 1000
    }]} as RootState)).toEqual([{
      trip: 'a', day: 1, date: '2000-01-01',
      startLoc: 'NY', startLat: 123, startLng: 123,
      endLoc: 'NJ', endLat: 321, endLng: 321
    }]);
  });

  it('should select travel locations', () => {
    expect(selectTravelLocations({'travelLog': [{
      trip: 'a', day: 1, date: '2000-01-01',
      startLoc: 'NY', startLat: 123, startLng: 123,
      endLoc: 'NJ', endLat: 321, endLng: 321,
      wordCount: 100, sentenceCount: 10, characterCount: 1000
    },{
      trip: 'a', day: 2, date: '2000-01-02',
      startLoc: 'NJ', startLat: 123, startLng: 123,
      endLoc: 'NJ', endLat: 321, endLng: 321,
      wordCount: 100, sentenceCount: 10, characterCount: 1000
    }]} as RootState)).toEqual([{
      trip: 'a', name: 'NJ', lat: 321, lng: 321, days: 2
    }]);
  });

  it('should select max days in a location', () => {
    expect(selectLocationDaysMax({'travelLog': [{
      trip: 'a', day: 1, date: '2000-01-01',
      startLoc: 'NY', startLat: 123, startLng: 123,
      endLoc: 'NJ', endLat: 321, endLng: 321,
      wordCount: 100, sentenceCount: 10, characterCount: 1000
    },{
      trip: 'a', day: 2, date: '2000-01-02',
      startLoc: 'NJ', startLat: 123, startLng: 123,
      endLoc: 'NJ', endLat: 321, endLng: 321,
      wordCount: 100, sentenceCount: 10, characterCount: 1000
    }]} as RootState)).toEqual(2);
  });
});
