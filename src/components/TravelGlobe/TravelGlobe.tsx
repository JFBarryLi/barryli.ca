import Box from '@mui/material/Box';
import Globe from 'react-globe.gl';

import earth from 'assets/maps/blank-earth-3600x1800.png';

interface Travel {
  day: number;
  date: string;
  startLoc: string;
  startLat: number;
  startLng: number;
  endLoc: string;
  endLat: number;
  endLng: number;
}

interface Locations {
  name: string;
  lat: number;
  lng: number;
}

interface LocationsStat extends Locations {
  days: number;
}

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

const arcsData = travelData.filter((d: Travel) => d.startLoc !== d.endLoc);

const locations = travelData
  .map((d: Travel) => ({name: d.endLoc, lat: d.endLat, lng: d.endLng}))
  .filter(
    (ele: Locations, index: number, array) => array.findIndex(
      (obj: Locations) => obj.name === ele.name
    ) === index
  );

const locationsData = locations
  .map((loc: Locations, index: number) => ({
    name: loc.name,
    lat: loc.lat,
    lng: loc.lng,
    days: travelData.filter((item: Travel) => item.endLoc === loc.name).length
}));

const maxDays = Math.max(...locationsData.map((o: LocationsStat) => o.days), 0);

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

       pointsData={locationsData}
       pointLabel={(d: any) => `<div style='color:black'>Days spent here: ${d.days}</div>`}
       pointLat={(d: any) => d.lat}
       pointLng={(d: any) => d.lng}
       pointRadius={() => 0.3}
       pointAltitude={(d: any) => d.days/maxDays * 0.5}
       pointColor={() => 'blue'}

       labelsData={locationsData}
       labelLat={(d: any) => d.lat}
       labelLng={(d: any) => d.lng}
       labelText={(d: any) => d.name}
       labelSize={() => 1}
       labelDotRadius={() => 0.5}
       labelColor={() => 'orange'}

       arcsData={arcsData}
       arcLabel={(d: any) => `<div style='color:black'>Day ${d.day} - ${d.date}</div>`}
       arcStartLat={(d: any) => d.startLat}
       arcStartLng={(d: any) => d.startLng}
       arcEndLat={(d: any) => d.endLat}
       arcEndLng={(d: any) => d.endLng}
       arcColor={() => '#ff0000'}
       arcDashLength={0.5}
       arcDashGap={1}
       arcDashAnimateTime={4000}
     />
   </Box>
  )
}

export default TravelGlobe;
