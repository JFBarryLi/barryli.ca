import Box from '@mui/material/Box';
import Globe from 'react-globe.gl';

import earth from 'assets/maps/blank-earth-3600x1800.png';

const N = 20;
const arcsData = [...Array(N).keys()].map(() => ({
  startLat: (Math.random() - 0.5) * 180,
  startLng: (Math.random() - 0.5) * 360,
  endLat: (Math.random() - 0.5) * 180,
  endLng: (Math.random() - 0.5) * 360,
  color: [['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)], ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)]]
}));

const TravelGlobe = function() {
 return (
   <Box sx={{
     margin: 4,
     display: 'flex',
     alignItems: 'center',
     justifyContent: 'center',
   }}>
     <Globe
       height={window.innerWidth/1.25}
       width={window.innerWidth/1.25}
       backgroundColor='#ffffff'
       globeImageUrl={earth}
       arcsData={arcsData}
       arcColor={'color'}
       arcDashLength={() => Math.random()}
       arcDashGap={() => Math.random()}
       arcDashAnimateTime={() => Math.random() * 4000 + 500}
     />
   </Box>
  )
}

export default TravelGlobe;
