import Box from '@mui/material/Box';

import NavBar from 'components/NavBar';
import SummaryCard from 'visuals/SummaryCard';
import TravelGlobe from 'visuals/TravelGlobe';

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
