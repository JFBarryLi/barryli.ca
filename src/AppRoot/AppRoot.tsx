import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
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

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
