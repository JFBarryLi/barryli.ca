import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { useSelector } from 'react-redux';

import { selectSummaryCardData } from 'slices/travelLog';

import { useGetTravelLogByTripNameQuery } from 'apis/travelLog';

const SummaryCard = () => {
  const cardData = useSelector(selectSummaryCardData);
  const { isLoading } = useGetTravelLogByTripNameQuery('World Tour 2021-2023');

  return (
    <Card sx={{
      minWidth: 150,
      width: '50%',
      margin: 'auto',
      marginTop: '3em',
    }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          World Tour 2021 - 2023
        </Typography>
        <Typography sx={{ m: 2 }} variant="h5" color='text.secondary' component='div'>
          Day {cardData.currentDay}
        </Typography>
        <Typography sx={{ m: 2 }} color='text.secondary'>
          📍 {isLoading ? 'Retrieving...' : cardData.currentLocation}
        </Typography>
      </CardContent>
    </Card>
  )
};

export default SummaryCard;
