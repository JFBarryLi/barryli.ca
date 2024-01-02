import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import NavBar from 'components/NavBar';
import WorkExperience from 'components/WorkExperience';

const AboutPage = () => {
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
          Hello, I'm Barry. I am an experienced data engineer who has worked in a diverse set of environments, from startups to international organizations.
        </Typography>
        <Typography variant='body1' component='div' sx={{
          margin: '0.5em',
          display: 'block',
        }}>        
          I specialize in designing and building data platforms from the ground up. As well as maintaining an organization's existing data platform.
          </Typography>
          <Typography variant='body1' component='div' sx={{
            margin: '0.5em',
            display: 'block',
          }}>
          I place heavy emphasis on engineering best practices in order to ensure reliability, observability, availability, maintainability, scalability, and governance of the data platform.
        </Typography>
        <Typography variant='body1' component='div' sx={{
          margin: '0.5em',
          marginTop: '1.5em',
          display: 'block',
        }}>
          When I'm not working, I spend my free time travelling the world and climbing mountains.
        </Typography>
        <Typography variant='body1' component='div' sx={{
          margin: '0.5em',
          display: 'block',
        }}>
        </Typography>
        <Typography variant='body1' component='div' sx={{
          margin: '0.5em',
          display: 'block',
        }}>
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
