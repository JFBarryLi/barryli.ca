import { useTheme, Theme } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Globe from 'react-globe.gl';

import { GlobeData } from 'slices/travelLog';

import earth from 'assets/maps/blank-earth-3600x1800.png';

interface Props {
  data: GlobeData;
}

const getPointColor = (days: number, maxDays: number, theme:Theme) => {
  const ratio = days/maxDays;
  let color;
  if (ratio <= 0.05) {
    color = theme.palette.primary.light;
  } else if (ratio <= 0.2 && ratio > 0.05) {
    color = theme.palette.primary.main;
  } else if (ratio <= 0.6 && ratio > 0.2) {
    color = theme.palette.primary.dark;
  } else {
    color = theme.palette.secondary.dark;
  }
  
  return color;
}

const TravelGlobe = ({ data }: Props) => {
  const theme = useTheme();

  return (
    <Box component='div' sx={{
      margin: 4,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      canvas: {borderRadius: '50%'}
    }}>
      <Globe
        height={window.innerWidth/1.25}
        width={window.innerWidth/1.25}
        backgroundColor='#ffffff'
        globeImageUrl={earth}

        pointsData={data.travelLocations}
        pointLabel={(d: any) => `<div><div style='font-weight: 400; font-family: "Roboto","Helvetica","Arial",sans-serif; border-radius: 10px; padding: 0.5em; background-color: orange; color: #00000099'>${d.name}<br />Total # of days spent here: ${d.days}<br /># of visits: ${d.numVisits}</div></div>`}
        pointLat={(d: any) => d.lat}
        pointLng={(d: any) => d.lng}
        pointRadius={() => 0.3}
        pointAltitude={(d: any) => d.days/data.maxDays * 0.5}
        pointColor={(d: any) => getPointColor(d.days, data.maxDays, theme)}

        labelsData={data.travelLocations}
        labelLat={(d: any) => d.lat}
        labelLng={(d: any) => d.lng}
        labelText={(d: any) => ''}
        labelSize={() => 1}
        labelDotRadius={() => 0.5}
        labelColor={() => theme.palette.secondary.main}

        arcsData={data.travelPaths}
        arcLabel={(d: any) => `<div><div style='font-weight: 400; font-family: "Roboto","Helvetica","Arial",sans-serif; border-radius: 10px; padding: 0.5em; background-color: orange; color: #00000099'>Day ${d.Day} - ${d.Date} <br />${d.StartLoc} → ${d.EndLoc}</div></div>`}
        arcStartLat={(d: any) => d.StartLat}
        arcStartLng={(d: any) => d.StartLng}
        arcEndLat={(d: any) => d.EndLat}
        arcEndLng={(d: any) => d.EndLng}
        arcColor={(d: any) => [theme.palette.primary.light, theme.palette.secondary.main]}
        arcDashLength={0.5}
        arcDashInitialGap={() => Math.random()}
        arcDashGap={1}
        arcDashAnimateTime={5000}
        arcStroke={0.5}
      />
   </Box>
  )
}

export default TravelGlobe;
