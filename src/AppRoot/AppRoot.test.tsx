import { render } from '@testing-library/react';
import App from './AppRoot';

test('AppRoot exist', () => {
	render(<App />);
	expect.anything();
});
