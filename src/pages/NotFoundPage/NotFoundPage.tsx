import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import NavBar from 'components/NavBar';

const NotFoundPage = () => (
  <Box component='div' sx={{
    width: '100%',
    height: '100%',
  }}>
    <NavBar />
    <Typography variant='h1' component='div' sx={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      textAlign: 'center',
      fontWeight: 'bold',
      color: '#111',
    }}>
      404 Page Not Found
    </Typography>
  </Box>
);

export default NotFoundPage;
