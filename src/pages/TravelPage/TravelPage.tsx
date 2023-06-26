import { useSelector } from 'react-redux';

import { Box, Grid} from '@mui/material';
import NavBar from 'components/NavBar';

import SummaryStats from 'visuals/SummaryStats';
import { ResponsiveBar } from '@nivo/bar';

import {
  selectCountryCount,
  selectWordCount,
  selectTotalHaversineDistance,
  selectCountryByDays,
} from 'slices/travelLog';

const TravelPage = () => {
  const countryCount = useSelector(selectCountryCount);
  const countryCountSummaryStats = {
    title: '',
    stats: countryCount,
    description: 'Countries Visited',
  }

  const wordCount = useSelector(selectWordCount);
  const wordCountSummaryStats = {
    title: '',
    stats: wordCount,
    description: 'Words Written',
  }

  const totalHaversineDistance = useSelector(selectTotalHaversineDistance);
  const totalHaversineDistanceSummaryStats = {
    title: '',
    stats: totalHaversineDistance,
    description: 'KM Traveled As The Crow Flies'
  }

  const countryByDaysObj = useSelector(selectCountryByDays);
  const countryByDays = Object.keys(countryByDaysObj).map((key) => {
    return {
      'country': key,
      'days': countryByDaysObj[key as keyof typeof countryByDaysObj]
    }
  }).sort(function(a, b){
    return b.days - a.days;
  });

  const countriesToShow = countryByDays.map((v,i) => i % 3 === 0 ? v.country : '');

  return (
    <Box sx={{
      display: 'block',
      width: '100%',
      height: '100%',
    }}>
      <NavBar />
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} sm={6} lg={4}>
          <SummaryStats data={countryCountSummaryStats} />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <SummaryStats data={wordCountSummaryStats} />
        </Grid>
        <Grid item xs={12} lg={4}>
          <SummaryStats data={totalHaversineDistanceSummaryStats} />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Box sx={{
            height: '500px',
            width: '100%',
          }}>
            <ResponsiveBar
              data={countryByDays}
              keys={['days']}
              indexBy={'country'}
              margin={{ top: 100, right: 100, bottom: 180, left: 100 }}
              padding={0.3}
              valueScale={{ type: 'linear' }}
              indexScale={{ type: 'band', round: true }}
              colors={{ scheme: 'nivo' }}
              borderColor={{
                from: 'color',
                modifiers: [
                  [
                    'darker',
                    1.6
                  ]
                ]
              }}
              axisTop={null}
              axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 90,
                legend: '',
                legendPosition: 'middle',
                legendOffset: 32,
                format: v => countriesToShow.find(vts => vts === v) ? v : ""
              }}
              axisRight={null}
              axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Days',
                legendPosition: 'middle',
                legendOffset: -40
              }}
              labelSkipWidth={12}
              labelSkipHeight={12}
              labelTextColor={{
                from: 'color',
                modifiers: [
                  [
                    'darker',
                    1.6
                  ]
                ]
              }}
              role="application"
              ariaLabel="Country By Days Bar chart"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default TravelPage;
