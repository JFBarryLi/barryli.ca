import Box from '@mui/material/Box';

import NavBar from 'components/NavBar';
import PageHeader from 'components/PageHeader';

const ProjectsPage = () => (
  <Box component='div' sx={{
    display: 'block',
    width: '100%',
    height: '100%',
  }}>
    <NavBar />
    <PageHeader text='Projects' />
  </Box>
);

export default ProjectsPage;
