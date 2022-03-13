import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';

const NavBar = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Barry Li
        </Typography>
        <IconButton
          compone="a"
          href="https://github.com/jfbarryli"
          color="inherit"
          aria-label="GitHub"
          sx={{
            mr: 1,
            position: 'relative',
            p: '6.5px',
            borderRadius: 1,
            border: '1px solid',
            color: (theme) => (theme.palette.mode === 'dark' ? 'grey.100' : 'primary.main'),
            bgcolor: (theme) =>
              theme.palette.mode === 'dark' ? 'primaryDark.800' : 'transparent',
            borderColor: (theme) =>
              theme.palette.mode === 'dark' ? 'primaryDark.500' : 'grey.200',
            '& svg': { width: 18, height: 18 },
            '&:focus': {
              boxShadow: (theme) =>
                `0 0 0 1px ${
                theme.palette.mode === 'dark'
                  ? theme.palette.primaryDark[600]
                  : theme.palette.grey[200]
              }`,
            },
          }}
        >
          <GitHubIcon fontSize='small' />
        </IconButton>
      </Toolbar>
    </AppBar>
  </Box>
);

export default NavBar;
