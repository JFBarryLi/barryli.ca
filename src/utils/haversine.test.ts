import haversineDistance from 'utils/haversine';

test('Haversine Distance Calculation', () => {
  const lat1 = 51.5007;
  const lng1 = 0.1246;
  const lat2 = 40.6892;
  const lng2 = 74.0445;
  const d = haversineDistance(lat1, lng1, lat2, lng2);

  expect(d == 5574.840456848555);
});
