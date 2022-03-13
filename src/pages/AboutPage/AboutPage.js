import Typography from '@mui/material/Typography';

import NavBar from 'components/NavBar';

const AboutPage = () => (
  <div sx={{
    display: 'block',
    width: '100%',
    height: '100%',
  }}>
    <NavBar />
    <Typography variant='h3' component='div' sx={{ flexGrow: 1 }}>
      About
    </Typography>
  </div>
);

export default AboutPage;
