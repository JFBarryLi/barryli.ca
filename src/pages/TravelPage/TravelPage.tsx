import Box from '@mui/material/Box';

import NavBar from 'components/NavBar';
import PageHeader from 'components/PageHeader';

const TravelPage = () => (
  <Box sx={{
    display: 'block',
    width: '100%',
    height: '100%',
  }}>
    <NavBar />
    <PageHeader text='Travel' />
  </Box>
);

export default TravelPage;
