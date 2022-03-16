import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuItem from '@mui/material/MenuItem';

import { Link } from 'react-router-dom';

const NavBar = function() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
            onClick={handleOpenNavMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id='menu-appbar'
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            <MenuItem onClick={handleCloseNavMenu}>
              <Link to='/' end>
                <Typography textAlign='center'>Home</Typography>
              </Link>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Link to='/about'>
                <Typography textAlign='center'>About</Typography>
              </Link>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Link to='/projects'>
                <Typography textAlign='center'>Projects</Typography>
              </Link>
            </MenuItem>
          </Menu>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Barry Li
          </Typography>
          <IconButton
            compone='a'
            href='https://github.com/jfbarryli'
            color='inherit'
            aria-label='GitHub'
            sx={{
              mr: 1,
              position: 'relative',
              p: '6.5px',
              borderRadius: 1,
              border: '1px solid',
              color: 'grey.100',
              bgcolor: 'transparent',
              borderColor: 'grey.200',
              '& svg': { width: 18, height: 18 },
              '&:focus': {
                boxShadow: (theme) =>
                  `0 0 0 1px ${
                    theme.palette.grey[200]
                }`,
              },
            }}
          >
            <GitHubIcon fontSize='small' />
          </IconButton>
          <IconButton
            compone='a'
            href='https://linkedin.com/in/jingfeng-barry-li'
            color='inherit'
            aria-label='LinkedIn'
            sx={{
              mr: 1,
              position: 'relative',
              p: '6.5px',
              borderRadius: 1,
              border: '1px solid',
              color: 'grey.100',
              bgcolor: 'transparent',
              borderColor: 'grey.200',
              '& svg': { width: 18, height: 18 },
              '&:focus': {
                boxShadow: (theme) =>
                  `0 0 0 1px ${
                    theme.palette.grey[200]
                  }`,
              },
            }}
          >
            <LinkedInIcon fontSize='small' />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
