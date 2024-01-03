import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import NavBar from 'components/NavBar';

const ContactPage = () => (
  <Box component='div' sx={{
    display: 'block',
    width: '100%',
    height: '100%',
  }}>
    <NavBar />
    <div>
      <Typography sx={{
        textAlign: 'center',
        fontSize: '2em',
        margin: '1em',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        Email me at:
      </Typography>
      <Link
        href='mailto:contact@barryli.ca'
        underline='none'
        align='center'
        sx={{
          textAlign: 'center',
          fontSize: '2em',
          margin: '1em',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        contact@barryli.ca
      </Link>
    </div>
  </Box>
);

export default ContactPage;
