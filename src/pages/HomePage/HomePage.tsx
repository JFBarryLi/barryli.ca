import NavBar from 'components/NavBar';
import SummaryCard from 'components/SummaryCard';
import TravelGlobe from 'components/TravelGlobe';

const HomePage = () => (
    <div sx={{
      display: 'block',
      width: '100%',
      height: '100%',
    }}>
      <NavBar />
      <SummaryCard />
      <TravelGlobe />
    </div>
);

export default HomePage;
