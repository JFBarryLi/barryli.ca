import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

type Experience = {
  title: string,
  company: string,
  location: string,
  date: string,
}

type Props = {
  experience: Experience
}

const WorkExperience = ({experience}: Props) => (
  <Box component='div' sx={{
    margin: '1em',
    padding: '1em',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    border: 0,
    borderBottom: '4px solid',
    borderImage: theme => `linear-gradient(
      to right,
      white,
      ${theme.palette.primary.main},
      ${theme.palette.secondary.main},
      white)
      1`,
  }}>
    <Typography variant='h3' component='div' sx={{
    }}>
      {experience.title}
    </Typography>
    <Typography variant='h4' component='div' sx={{
      fontStyle:'italic',
      marginBottom: '0.5em',
      textAlign: 'center',
    }}>
      {experience.company}
    </Typography>
    <Typography variant='body1' component='div' sx={{
    }}>
      📍 {experience.location}
    </Typography>
    <Typography variant='body1' component='div' sx={{
    }}>
      🗓️ {experience.date}
    </Typography>
  </Box>
);

export default WorkExperience;
