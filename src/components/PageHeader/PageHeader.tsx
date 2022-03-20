import Typography from '@mui/material/Typography';

type Props = {
  text: string,
}

const PageHeader = ({ text }: Props) => (
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
    {text}
  </Typography>
);

export default PageHeader;
