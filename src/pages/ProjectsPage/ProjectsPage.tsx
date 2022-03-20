import NavBar from 'components/NavBar';
import PageHeader from 'components/PageHeader';

const ProjectsPage = () => (
  <div sx={{
    display: 'block',
    width: '100%',
    height: '100%',
  }}>
    <NavBar />
    <PageHeader text='Projects' />
  </div>
);

export default ProjectsPage;
