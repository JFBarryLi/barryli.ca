import { ThemeProvider, createTheme } from '@mui/material/styles';
import @fontsource/roboto;

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
    <ThemeProvider theme={theme}>
      Barry Li
    </ThemeProvider>
  );
}

export default App;
