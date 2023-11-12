import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';

import NavBar from 'components/NavBar';
import TravelGlobe from 'visuals/TravelGlobe';

import {
  selectTravelPaths,
  selectTravelLocations,
  selectMaxDays,
} from 'slices/travelLog';

const HomePage = () => {
  const travelPaths = useSelector(selectTravelPaths);
  const travelLocations = useSelector(selectTravelLocations);
  const maxDays = useSelector(selectMaxDays);
  const globeData = {
    travelPaths: travelPaths,
    travelLocations: travelLocations,
    maxDays: maxDays,
  }

  return (
    <div>
      <Box component='div' sx={{
        display: 'block',
        width: '100%',
        height: '100%',
      }}>
        <NavBar />
      </Box>
      <TravelGlobe data={globeData} />
    </div>
  );
}

export default HomePage;
