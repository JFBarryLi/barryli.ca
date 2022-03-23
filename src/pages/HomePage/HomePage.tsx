import Box from '@mui/material/Box';

import NavBar from 'components/NavBar';
import SummaryCard from 'components/SummaryCard';
import TravelGlobe from 'components/TravelGlobe';

const HomePage = () => (
    <Box sx={{
      display: 'block',
      width: '100%',
      height: '100%',
    }}>
      <NavBar />
      <SummaryCard />
      <TravelGlobe />
    </Box>
);

export default HomePage;
