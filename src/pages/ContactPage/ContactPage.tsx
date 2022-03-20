import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import NavBar from 'components/NavBar';
import PageHeader from 'components/PageHeader';

const ContactPage = () => (
  <div sx={{
    display: 'block',
    width: '100%',
    height: '100%',
  }}>
    <NavBar />
    <PageHeader text='Contact' />
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
  </div>
);

export default ContactPage;