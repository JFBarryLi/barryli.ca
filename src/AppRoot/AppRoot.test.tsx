import { render } from '@testing-library/react';

import App from 'AppRoot';

jest.mock('components/TravelGlobe');

test('AppRoot exist', () => {
  render(<App />);
  expect.anything();
});
