import Box from '@mui/material/Box';
import NavBar from 'components/NavBar';
import PageHeader from 'components/PageHeader';

const AboutPage = () => (
  <Box sx={{
    display: 'block',
    width: '100%',
    height: '100%',
  }}>
    <NavBar />
    <PageHeader text='About' />
  </Box>
);

export default AboutPage;
