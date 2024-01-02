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
    margin: '2em',
    marginLeft: {
      sm: 'auto',
    },
    marginRight: {
      sm: 'auto',
    },
    width: {
      sm: '50%',
    },
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
      textAlign: 'center',
      fontWeight: 500,
    }}>
      {experience.title}
    </Typography>
    <Typography variant='h4' component='div' sx={{
      fontStyle:'italic',
      marginBottom: '0.5em',
      textAlign: 'center',
      fontWeight: 400,
      color: '#173A5E',
    }}>
      {experience.company}
    </Typography>
    <Typography variant='body1' component='div' sx={{
      textAlign: 'center',
    }}>
      📍 {experience.location}
    </Typography>
    <Typography variant='body1' component='div' sx={{
      textAlign: 'center',
    }}>
      🗓️ {experience.date}
    </Typography>
  </Box>
);

export default WorkExperience;
