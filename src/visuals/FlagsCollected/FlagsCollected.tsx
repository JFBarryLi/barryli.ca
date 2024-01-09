import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

import InformationTooltip from 'components/InformationTooltip';

interface CountryStats {
  countryName: string;
  countryCode: string;
  daysSpent: number;
}

interface Props {
  data: Array<CountryStats>;
}

const FlagsCollected = ({ data }: Props) => {
  const flags = data.length ? data.map((country: CountryStats) => {
    let src;
  
    if (country.countryCode === 'xk') {
      src = 'https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/flat/64/Kosovo.png';
    } else {
      src = 'https://flagsapi.com/' + country.countryCode.toUpperCase() + '/flat/64.png';
    }
    return (
      <InformationTooltip key={country.countryCode} title={
        <>
          <Typography color='inherit' variant='h6'>{country.countryName} - {country.countryCode.toUpperCase()}</Typography>
          <Typography variant='body2'>Spent a total of {country.daysSpent} days travelling here.</Typography>
        </>  
      }>
        <Box component='img' sx={{margin: '0.5em', width: '32px'}} alt={country.countryCode.toUpperCase()} src={src} />
      </InformationTooltip>
    );
  }) : <CircularProgress color='primary' />;

  return (
    <Card sx={{
      minWidth: 150,
      width: '80%',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '2em',
    }}>
      <CardContent>
        {flags}
      </CardContent>
    </Card>
  )
};

export default FlagsCollected;
