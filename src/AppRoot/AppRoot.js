import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import '@fontsource/roboto';

import Router from 'routes';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#311b92',
    },
    secondary: {
      main: '#ff005b',
    },
  },
});

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
