import Typography from '@mui/material/Typography';

type Props = {
  text: string,
}

const VisualTitle = ({ text }: Props) => (
  <Typography variant='h5' component='div' sx={{
    flexGrow: 1,
    marginTop: '1em',
    marginLeft: '1em',
    marginRight: '1em',
    marginBottom: 0,
    color: '#111',
    fontWeight: 'lighter',
  }}>
    {text}
  </Typography>
);

export default VisualTitle;
