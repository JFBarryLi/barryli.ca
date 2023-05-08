import { useSelector } from 'react-redux';

import Box from '@mui/material/Box';

import NavBar from 'components/NavBar';

import SummaryStats from 'visuals/SummaryStats';

import {
  selectCountryCount,
} from 'slices/travelLog';

const TravelPage = () => {
  const countryCount = useSelector(selectCountryCount);
  const countryCountSummaryStats = {
    title: '',
    stats: countryCount,
    description: 'Countries Visited',
  }
  return (
    <Box sx={{
      display: 'block',
      width: '100%',
      height: '100%',
    }}>
      <NavBar />
      <SummaryStats data={countryCountSummaryStats} />
    </Box>
  );
}

export default TravelPage;
