import { useDispatch } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import { store } from './store';
import { Provider } from 'react-redux';
import '@fontsource/roboto';

import Router from 'routes';

import { useGetTravelLogByTripNameQuery } from 'apis/travelLog';
import {
  travelLogCreated,
} from 'slices/travelLog';

let theme = createTheme({
  palette: {
    primary: {
      main: '#311b92',
    },
    secondary: {
      main: '#ff005b',
    },
  },
  typography: {
    'fontFamily': 'Roboto',
  },
  mixins: {
    toolbar: {
      minHeight: 64,
    }
  }
});

theme = responsiveFontSizes(theme);

const DataLayer = function() {
  const { data, isLoading } = useGetTravelLogByTripNameQuery('World Tour 2021-2023');
  const dispatch = useDispatch();

  if (!isLoading) {
    dispatch(travelLogCreated(data));
  }

  return(null);
}

const App = function() {
  return (
    <Provider store={store}>
      <DataLayer />
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
