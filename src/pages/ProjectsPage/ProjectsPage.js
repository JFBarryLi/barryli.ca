import Typography from '@mui/material/Typography';

import NavBar from 'components/NavBar';

const ProjectsPage = () => (
  <div sx={{
    display: 'block',
    width: '100%',
    height: '100%',
  }}>
    <NavBar />
    <Typography variant='h3' component='div' sx={{ flexGrow: 1 }}>
      Projects
    </Typography>
  </div>
);

export default ProjectsPage;
