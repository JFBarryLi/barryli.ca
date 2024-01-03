import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

interface SummaryStatsData {
  title: string | undefined;
  stats: number | undefined;
  description: string | undefined;
}

interface Props {
  data: SummaryStatsData;
}

const SummaryStats = ({ data }: Props) => {
  return (
    <Card sx={{
      minWidth: 150,
      width: '80%',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '2em',
    }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {data.title}
        </Typography>
        <Typography 
          sx={{ m: 2, fontSize: {xs: 36, sm: 54, md: 72} }}
          variant="h1"
          color='primary.dark'
          component='div'
        >
          {data.stats ? Intl.NumberFormat('en-US', {
            notation: "compact",
            maximumFractionDigits: 1,
          }).format(data.stats) : <CircularProgress color='primary' />}
        </Typography>
        <Typography 
          sx={{ m: 2, fontSize: {xs: 24, md: 36} }}
          color='text.secondary'
          component='div'
        >
          {data.description}
        </Typography>
      </CardContent>
    </Card>
  )
};

export default SummaryStats;
