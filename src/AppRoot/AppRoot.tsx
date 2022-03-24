import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import { store } from './store';
import { Provider } from 'react-redux';
import '@fontsource/roboto';

import Router from 'routes';

let theme = createTheme({
  palette: {
    primary: {
      main: '#311b92',
    },
    secondary: {
      main: '#ff005b',
    },
  },
  mixins: {
    toolbar: {
      minHeight: 64,
    }
  }
});

theme = responsiveFontSizes(theme);

const App = function() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
