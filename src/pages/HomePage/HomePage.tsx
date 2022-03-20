import NavBar from 'components/NavBar';
import SummaryCard from './components/SummaryCard';

const HomePage = () => (
    <div sx={{
      display: 'block',
      width: '100%',
      height: '100%',
    }}>
      <NavBar />
      <SummaryCard />
    </div>
);

export default HomePage;
