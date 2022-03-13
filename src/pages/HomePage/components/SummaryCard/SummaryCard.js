import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const firstDayTravelling = '09/30/2021';
const currentLocation = 'Lviv, Ukraine';

const firstDay = new Date(firstDayTravelling);
const today = new Date();

const currentDay = Math.round((today - firstDay) / (1000*60*60*24));

const SummaryCard = () => (
  <Card sx={{
    minWidth: 150,
    width: '50%',
    margin: 'auto',
    marginTop: '3em',
  }}>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        On The Road
      </Typography>
      <Typography sx={{ m: 2 }} variant="h5" color='text.secondary' component='div'>
        Day {currentDay}
      </Typography>
      <Typography sx={{ m: 2 }} color='text.secondary'>
        📍 {currentLocation}
      </Typography>
    </CardContent>
  </Card>
);

export default SummaryCard;
