import { useSelector } from 'react-redux';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

import NavBar from 'components/NavBar';
import WorkExperience from 'components/WorkExperience';

import { useGetTravelLogByTripNameQuery } from 'apis/travelLog';

import {
  selectCountryCount,
  selectLatestDay,
} from 'slices/travelLog';

const AboutPage = () => {
  const { isLoading } = useGetTravelLogByTripNameQuery('World Tour 2021-2023');

  const latestDay = useSelector(selectLatestDay);
  const countryCount = useSelector(selectCountryCount);

  return (
    <Box component='div' sx={{
      display: 'block',
      width: '100%',
      height: '100%',
    }}>
      <NavBar />
      <Box component='div' sx={{
        padding: '2em',
      }}>
        <Typography variant='body1' component='div' sx={{
          margin: '0.5em',
          display: 'block',
        }}>
          Hello, I'm Barry.
        </Typography>
        <Typography variant='body1' component='div' sx={{
          margin: '0.5em',
          display: 'block',
        }}>
          I have spent {
            isLoading ? <CircularProgress size='1em' /> : latestDay
          } days travelling the world in 2021-2023.
        </Typography>
        <Typography variant='body1' component='div' sx={{
          margin: '0.5em',
          display: 'block',
        }}>
          Over these {
            isLoading ? <CircularProgress size='1em' /> : latestDay
          } days I have travelled to {
            isLoading ? <CircularProgress size='1em' /> : countryCount
          } different countries.
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
