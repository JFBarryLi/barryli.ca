import { useSelector } from 'react-redux';

import Box from '@mui/material/Box';

import NavBar from 'components/NavBar';

import SummaryStats from 'visuals/SummaryStats';

import {
  selectCountryCount,
  selectWordCount,
  selectTotalHaversineDistance,
} from 'slices/travelLog';

const TravelPage = () => {
  const countryCount = useSelector(selectCountryCount);
  const countryCountSummaryStats = {
    title: '',
    stats: countryCount,
    description: 'Countries Visited',
  }

  const wordCount = useSelector(selectWordCount);
  const wordCountSummaryStats = {
    title: '',
    stats: wordCount,
    description: 'Words Written',
  }

  const totalHaversineDistance = useSelector(selectTotalHaversineDistance);
  const totalHaversineDistanceSummaryStats = {
    title: '',
    stats: totalHaversineDistance,
    description: 'KM Traveled As The Crow Flies'
  }

  return (
    <Box sx={{
      display: 'block',
      width: '100%',
      height: '100%',
    }}>
      <NavBar />
      <SummaryStats data={countryCountSummaryStats} />
      <SummaryStats data={wordCountSummaryStats} />
      <SummaryStats data={totalHaversineDistanceSummaryStats} />
    </Box>
  );
}

export default TravelPage;
