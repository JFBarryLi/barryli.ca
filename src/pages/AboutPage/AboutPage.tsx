import { useSelector } from 'react-redux';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

import NavBar from 'components/NavBar';
import WorkExperience from 'components/WorkExperience';

import { useGetTravelLogByTripNameQuery } from 'apis/travelLog';

import {
  selectCurrentLocation,
  selectCountryCount,
} from 'slices/travelLog';

const AboutPage = () => {
  const { isLoading } = useGetTravelLogByTripNameQuery('World Tour 2021-2023');

  const firstDay = new Date('09/30/2021');
  const today = new Date();
  // The + here is to coerce the date to a number for Typescript.
  const currentDay = Math.round((+today - +firstDay) / (1000*60*60*24));
  const currentLocation = useSelector(selectCurrentLocation);
  const countryCount = useSelector(selectCountryCount);

  return (
    <Box sx={{
      display: 'block',
      width: '100%',
      height: '100%',
    }}>
      <NavBar />
      <Box sx={{
        padding: '2em',
      }}>
        <Typography variant='body1' component='div' sx={{
          margin: '0.5em',
          display: 'block',
        }}>
          Hello, I am Barry.
        </Typography>
        <Typography variant='body1' component='div' sx={{
          margin: '0.5em',
          display: 'block',
        }}>
          I am an experienced data engineer currently taking a break to travel the world.
        </Typography>
        <Typography variant='body1' component='div' sx={{
          margin: '0.5em',
          display: 'block',
        }}>
          Today I am on day {
            isLoading ? <CircularProgress size='1em' /> : currentDay
          } of my world tour.
        </Typography>
        <Typography variant='body1' component='div' sx={{
          margin: '0.5em',
          display: 'block',
        }}>
          I have travelled to {
            isLoading ? <CircularProgress size='1em' /> : countryCount
          } countries over the past {
            isLoading ? <CircularProgress size='1em' /> : currentDay} days.
        </Typography>
        <Typography variant='body1' component='div' sx={{
          margin: '0.5em',
          display: 'block',
        }}>
          Currently I am in {
            isLoading ? <CircularProgress size='1em' /> : currentLocation}.
        </Typography>
      </Box>

      <WorkExperience experience={{
        title: 'Data Engineer',
        company: 'United Nations',
        location: 'Bangui, Central African Republic',
        date: 'June 2022 - December 2022',
      }}/>
      <WorkExperience experience={{
        title: 'Data Engineer',
        company: 'Slice Labs',
        location: 'Ottawa, Canada',
        date: 'May 2019 - August 2021',
      }}/>
      <WorkExperience experience={{
        title: 'Software Engineer',
        company: 'Immigration, Refugees, and Citizenship Canada',
        location: 'Gatineau, Canada',
        date: 'October 2017 - September 2018',
      }}/>
      <WorkExperience experience={{
        title: 'Data Analyst Intern',
        company: 'Toronto-Dominion Bank',
        location: 'Ottawa, Canada',
        date: 'January 2017 - May 2017',
      }}/>
      <WorkExperience experience={{
        title: 'Data Analyst Intern',
        company: 'Statistics Canada',
        location: 'Ottawa, Canada',
        date: 'May 2016 - December 2016',
      }}/>
    </Box>
)};

export default AboutPage;
