import NavBar from 'components/NavBar';
import PageHeader from 'components/PageHeader';

const TravelPage = () => (
  <div sx={{
    display: 'block',
    width: '100%',
    height: '100%',
  }}>
    <NavBar />
    <PageHeader text='Travel' />
  </div>
);

export default TravelPage;
