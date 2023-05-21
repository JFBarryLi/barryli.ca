import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NavBar from 'components/NavBar';
import WorkExperience from 'components/WorkExperience';

const AboutPage = () => (
  <Box sx={{
    display: 'block',
    width: '100%',
    height: '100%',
  }}>
    <NavBar />
    <Typography variant='body1' component='div' sx={{
      margin: '1em',
    }}>
      I am Barry Li
    </Typography>
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
);

export default AboutPage;
