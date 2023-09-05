import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

import NavBar from 'components/NavBar';
import SummaryCard from 'visuals/SummaryCard';
import TravelGlobe from 'visuals/TravelGlobe';

import { useGetTravelLogByTripNameQuery } from 'apis/travelLog';

import {
  selectTravelPaths,
  selectTravelLocations,
  selectMaxDays,
  selectCurrentLocation,
  selectCountryCount,
} from 'slices/travelLog';

const HomePage = () => {
  const { isLoading } = useGetTravelLogByTripNameQuery('World Tour 2021-2023');

  const travelPaths = useSelector(selectTravelPaths);
  const travelLocations = useSelector(selectTravelLocations);
  const maxDays = useSelector(selectMaxDays);
  const globeData = {
    travelPaths: travelPaths,
    travelLocations: travelLocations,
    maxDays: maxDays,
  }

  const firstDay = new Date('09/30/2021');
  const today = new Date();
  // The + here is to coerce the date to a number for Typescript.
  const currentDay = Math.round((+today - +firstDay) / (1000*60*60*24));
  const currentLocation = useSelector(selectCurrentLocation);
  const countryCount = useSelector(selectCountryCount);
  const summaryCardData = {
    currentDay: currentDay,
    currentLocation: isLoading ? <
      LinearProgress
      color = 'primary'
    /> : currentLocation,
    countryCount: countryCount,
   }

  return (
    <div>
      <Box component='div' sx={{
        display: 'block',
        width: '100%',
        height: '100%',
      }}>
        <NavBar />
        <SummaryCard data={summaryCardData} />
      </Box>
      <TravelGlobe data={globeData} />
    </div>
  );
}

export default HomePage;
