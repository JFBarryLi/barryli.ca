import { useSelector } from 'react-redux';

import { Box, Grid, Card } from '@mui/material';
import NavBar from 'components/NavBar';
import VisualTitle from 'components/VisualTitle';

import SummaryStats from 'visuals/SummaryStats';
import TravelGraph from 'visuals/TravelGraph';
import { ResponsiveBar } from '@nivo/bar';
import { ResponsiveCalendar } from '@nivo/calendar';

import {
  selectTravelLocations,
  selectCountryCount,
  selectWordCount,
  selectTotalHaversineDistance,
  selectCountryByDays,
  selectPlaceByDays,
  selectMaxDate,
  selectMinDate,
  selectWordCountByDate,
  selectLocationGraphNodes,
  selectLocationGraphLinks,
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
  }).sort((a, b) => {
    return b.days - a.days;
  });
  const countriesToShow = countryByDays.map((v,i) => i % 3 === 0 ? v.country : '');

  const placeByDaysObj = useSelector(selectPlaceByDays);
  const placeByDays = Object.keys(placeByDaysObj).map((key) => {
    return {
      'place': key,
      'days': placeByDaysObj[key as keyof typeof placeByDaysObj]
    }
  }).sort((a, b) => {
    return b.days - a.days;
  }).slice(0, 10);

  const places = useSelector(selectTravelLocations);
  const placeByVisits = places.sort((a, b) => {
    return b.numVisits - a.numVisits;
  }).slice(0, 10);

  const wordCountByDate = useSelector(selectWordCountByDate);
  const minDate = useSelector(selectMinDate);
  const maxDate = useSelector(selectMaxDate);

  const travelGraphNodes = useSelector(selectLocationGraphNodes);
  const travelGraphEdges = useSelector(selectLocationGraphLinks);

  return (
    <Box component='div' sx={{
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
          <Box component='div' sx={{
            height: '500px',
            width: '100%',
          }}>
            <VisualTitle text='Days Spent in Each Country' />
            <ResponsiveBar
              data={countryByDays}
              keys={['days']}
              indexBy={'country'}
              margin={{ top: 10, right: 40, bottom: 180, left: 100 }}
              padding={0.3}
              valueScale={{ type: 'linear' }}
              indexScale={{ type: 'band', round: true }}
              colors={{ scheme: 'purpleRed_green' }}
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
                    'brighter',
                    1.6
                  ]
                ]
              }}
              role="application"
              ariaLabel="Country By Days Bar chart"
            />
          </Box>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Box component='div' sx={{
            height: '500px',
            width: '100%',
          }}>
            <VisualTitle text='Top 10 Place by Time Spent' />
            <ResponsiveBar
              data={placeByDays}
              keys={['days']}
              indexBy={'place'}
              margin={{ top: 10, right: 40, bottom: 100, left: 100 }}
              padding={0.3}
              valueScale={{ type: 'linear' }}
              indexScale={{ type: 'band', round: true }}
              colors={{ scheme: 'pink_yellowGreen' }}
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
                legendOffset: 32
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
                    'brighter',
                    1.6
                  ]
                ]
              }}
              role="application"
              ariaLabel="Top Place By Days Bar chart"
            />
          </Box>
        </Grid>
        <Grid item xs={12} lg={12}>
          <Box component='div' sx={{
            height: '500px',
            width: '100%',
          }}>
            <VisualTitle text='Top 10 Place by # of Visits' />
            <ResponsiveBar
              data={placeByVisits}
              keys={['numVisits']}
              indexBy={'name'}
              margin={{ top: 10, right: 40, bottom: 100, left: 100 }}
              padding={0.3}
              valueScale={{ type: 'linear' }}
              indexScale={{ type: 'band', round: true }}
              colors={{ scheme: 'brown_blueGreen' }}
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
                legendOffset: 32
              }}
              axisRight={null}
              axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: '# of Visits',
                legendPosition: 'middle',
                legendOffset: -40
              }}
              labelSkipWidth={12}
              labelSkipHeight={12}
              labelTextColor={{
                from: 'color',
                modifiers: [
                  [
                    'brighter',
                    1.6
                  ]
                ]
              }}
              role="application"
              ariaLabel="Top Place By Visits Bar chart"
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box component='div' sx={{
          }}>
            <VisualTitle text='Travel Graph - Connections' />
            <Card component='div' sx={{
              'height': '500px',
              'position': 'relative',
              'margin': '40px'
            }}>
              <TravelGraph nodes={travelGraphNodes} edges={travelGraphEdges} />
            </Card>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box component='div' sx={{
            'height': '500px',
            'width': '100%'
          }}>
            <VisualTitle text='Travel Journal Daily Word Count' />
            <ResponsiveCalendar
              data={wordCountByDate}
              from={minDate}
              to={maxDate}
              emptyColor="#eeeeee"
              colors={[ '#61cdbb', '#97e3d5', '#e8c1a0', '#f47560' ]}
              margin={{ top: 10, right: 40, bottom: 100, left: 40 }}
              yearSpacing={40}
              monthBorderColor="#ffffff"
              dayBorderWidth={2}
              dayBorderColor="#ffffff"
              legends={[
                {
                  anchor: 'bottom-right',
                  direction: 'row',
                  translateY: 36,
                  itemCount: 4,
                  itemWidth: 42,
                  itemHeight: 36,
                  itemsSpacing: 14,
                  itemDirection: 'right-to-left'
                }
              ]}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default TravelPage;
