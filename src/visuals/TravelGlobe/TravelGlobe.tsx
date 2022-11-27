import Box from '@mui/material/Box';
import Globe from 'react-globe.gl';
import { useSelector } from 'react-redux';

import { GlobeData } from 'slices/travelGlobeData';

import earth from 'assets/maps/blank-earth-3600x1800.png';

interface Props {
  data: GlobeData;
}

const TravelGlobe = ({ data }: Props) => {
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
        pointLabel={(d: any) => `<div><div style='font-weight: 400; font-family: "Roboto","Helvetica","Arial",sans-serif; border-radius: 10px; padding: 0.5em; background-color: orange; color: #00000099'>${d.name} - Total # of days spent here: ${d.days}</div></div>`}
        pointLat={(d: any) => d.lat}
        pointLng={(d: any) => d.lng}
        pointRadius={() => 0.3}
        pointAltitude={(d: any) => d.days/data.maxDays * 0.5}
        pointColor={() => 'blue'}

        labelsData={data.travelLocations}
        labelLat={(d: any) => d.lat}
        labelLng={(d: any) => d.lng}
        labelText={(d: any) => ''}
        labelSize={() => 1}
        labelDotRadius={() => 0.5}
        labelColor={() => 'orange'}
      />
   </Box>
  )
}

export default TravelGlobe;
