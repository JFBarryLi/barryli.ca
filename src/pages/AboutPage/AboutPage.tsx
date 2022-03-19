import NavBar from 'components/NavBar';
import PageHeader from 'components/PageHeader';

const AboutPage = () => (
  <div sx={{
    display: 'block',
    width: '100%',
    height: '100%',
  }}>
    <NavBar />
    <PageHeader text='About' />
  </div>
);

export default AboutPage;
