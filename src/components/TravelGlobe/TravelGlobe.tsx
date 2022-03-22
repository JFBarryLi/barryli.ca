import Box from '@mui/material/Box';
import Globe from 'react-globe.gl';

import earth from 'assets/maps/blank-earth-3600x1800.png';

const travelData = [
  {
    day: 0,
    date: '2021-09-30',
    startLoc: 'Toronto',
    startLat: 43.651070,
    startLng: -79.347015,
    endLoc: 'Toronto',
    endLat: 43.651070,
    endLng: -79.347015,
  },
  {
    day: 1,
    date: '2021-09-30',
    startLoc: 'Toronto',
    startLat: 43.651070,
    startLng: -79.347015,
    endLoc: 'Lisbon',
    endLat: 38.736946,
    endLng: -9.142685,
  },
  {
    day: 2,
    date: '2021-09-30',
    startLoc: 'Lisbon',
    startLat: 38.736946,
    startLng: -9.142685,
    endLoc: 'Lisbon',
    endLat: 38.736946,
    endLng: -9.1426855,
  },
  {
    day: 3,
    date: '2021-09-30',
    startLoc: 'Lisbon',
    startLat: 38.736946,
    startLng: -9.142685,
    endLoc: 'Lisbon',
    endLat: 38.736946,
    endLng: -9.1426855,
  },
  {
    day: 4,
    date: '2021-10-03',
    startLoc: 'Lisbon',
    startLat: 38.736946,
    startLng: -9.142685,
    endLoc: 'Lagos',
    endLat: 37.129665,
    endLng: -8.669586,
  },
];

const arcsData = travelData.filter(d => d.startLoc !== d.endLoc);

const locations = travelData
  .map(d => ({name: d.endLoc, lat: d.endLat, lng: d.endLng}))
  .filter((ele, index, array) => array.findIndex(obj => obj.name === ele.name) === index);

let locationsData = locations
  .map((loc, index) => ({
    name: loc.name,
    lat: loc.lat,
    lng: loc.lng,
    count: travelData.filter(item => item.endLoc === loc.name).length
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

       labelsData={locationsData}
       labelLat={d => d.lat}
       labelLng={d => d.lng}
       labelText={d => d.name}
       labelSize={() => 1}
       labelDotRadius={() => 0.5}
       labelColor={() => 'orange'}

       arcsData={arcsData}
       arcLabel={d => `<div style='color:black'>Day ${d.day} - ${d.date}</div>`}
       arcStartLat={d => d.startLat}
       arcStartLng={d => d.startLng}
       arcEndLat={d => d.endLat}
       arcEndLng={d => d.endLng}
       arcColor={() => '#ff0000'}
       arcDashLength={0.5}
       arcDashGap={1}
       arcDashAnimateTime={4000}
     />
   </Box>
  )
}

export default TravelGlobe;
