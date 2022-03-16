import Typography from '@mui/material/Typography';

const PageHeader = (props) => (
  <Typography variant='h1' component='div' sx={{
    flexGrow: 1,
    margin: '0.5em',
    color: '#111',
    fontWeight: 'bold',
    border: 0,
    borderBottom: '4px solid',
    borderImage: theme => `linear-gradient(
      to right,
      ${theme.palette.primary.main},
      ${theme.palette.secondary.main})
      1`,
  }}>
    {props.text}
  </Typography>
);

export default PageHeader;
