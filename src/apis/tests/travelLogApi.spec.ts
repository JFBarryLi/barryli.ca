import { getTravelLogByTripName } from 'apis/travelLog';

describe('getTravelLogByTripName', () => {
  it('should retrieve something', async () => {
    const data = await getTravelLogByTripName('World Tour 2021-2023');
    expect(data['Count']).toBeGreaterThan(0);
  });
});
