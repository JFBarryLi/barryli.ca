import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';

import NavBar from 'components/NavBar';
import SummaryCard from 'visuals/SummaryCard';
import TravelGlobe from 'visuals/TravelGlobe';

import { selectGlobeData } from 'slices/travelGlobeData';

const HomePage = () => {
  const globeData = useSelector(selectGlobeData);
  return (
    <div>
      <Box sx={{
        display: 'block',
        width: '100%',
        height: '100%',
      }}>
        <NavBar />
        <SummaryCard />
      </Box>
      <TravelGlobe data={globeData} />
    </div>
  );
}

export default HomePage;
