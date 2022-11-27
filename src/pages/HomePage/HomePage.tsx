import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';

import NavBar from 'components/NavBar';
import SummaryCard from 'visuals/SummaryCard';
import TravelGlobe from 'visuals/TravelGlobe';

import { selectGlobeData } from 'slices/travelGlobeData';

const HomePage = () => {
  const globeData = useSelector(selectGlobeData);

  /* The underlying Globe code relies on adding a prop to each item in the data */
  const mutableGlobeData = JSON.parse(JSON.stringify(globeData));

  return (
    <div>
      <Box sx={{
        display: 'block',
        width: '100%',
        height: '100%',
      }}>
        <NavBar />
        <SummaryCard />
      </Box>
      <TravelGlobe data={mutableGlobeData} />
    </div>
  );
}

export default HomePage;
