import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

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
      width: '100%',
      margin: 'auto',
    }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {data.title}
        </Typography>
        <Typography sx={{ m: 2, fontSize: 72 }} variant="h1" color='text.primary' component='div'>
          {data.stats}
        </Typography>
        <Typography sx={{ m: 2, fontSize: 36 }} color='text.secondary' component='div'>
          {data.description}
        </Typography>
      </CardContent>
    </Card>
  )
};

export default SummaryStats;
