import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CircularProgress from '@mui/material/CircularProgress';

interface FlagsCollectedData {
  countryCodes: Array<string>;
}

interface Props {
  data: FlagsCollectedData;
}

const FlagsCollected = ({ data }: Props) => {
  const flags = data.countryCodes.length ? data.countryCodes.map((code) => {
    let src;
    
    if (code === 'xk') {
      src = 'https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/flat/32/Kosovo.png';
    } else {
      src = 'https://flagsapi.com/' + code.toUpperCase() + '/flat/32.png';
    }
    return <Box component='img' sx={{margin: '0.5em'}} alt={code.toUpperCase()} title={code.toUpperCase()} src={src} />;
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
