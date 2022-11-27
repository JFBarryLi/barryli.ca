import Box from '@mui/material/Box';
import Globe from 'react-globe.gl';
import { useSelector } from 'react-redux';

import { GlobeData } from 'slices/travelGlobeData';

import earth from 'assets/maps/blank-earth-3600x1800.png';

interface Props {
  data: GlobeData;
}

const TravelGlobe = ({ data }: Props) => {
  console.log(data);
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

        pointsData={data.travelLocations}
        pointLabel={(d: any) => `<div style='color:black'>Days spent here: ${d.days}</div>`}
        pointLat={(d: any) => d.lat}
        pointLng={(d: any) => d.lng}
        pointRadius={() => 0.3}
        pointAltitude={(d: any) => d.days/data.maxDays * 0.5}
        pointColor={() => 'blue'}

        labelsData={data.travelLocations}
        labelLat={(d: any) => d.lat}
        labelLng={(d: any) => d.lng}
        labelText={(d: any) => d.name}
        labelSize={() => 1}
        labelDotRadius={() => 0.5}
        labelColor={() => 'orange'}

        arcsData={data.travelPaths}
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
