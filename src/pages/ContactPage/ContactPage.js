import Typography from '@mui/material/Typography';

import NavBar from 'components/NavBar';

const ContactPage = () => (
  <div sx={{
    display: 'block',
    width: '100%',
    height: '100%',
  }}>
    <NavBar />
    <Typography variant='h3' component='div' sx={{ flexGrow: 1 }}>
      Contact
    </Typography>
  </div>
);

export default ContactPage;
