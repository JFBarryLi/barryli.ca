import Typography from '@mui/material/Typography';

const NotFoundPage = () => (
  <div sx={{
    display: 'block',
    width: '100%',
    height: '100%',
  }}>
    <Typography variant='h3' component='div' sx={{ flexGrow: 1 }}>
      404 Not Found
    </Typography>
  </div>
);

export default NotFoundPage;
