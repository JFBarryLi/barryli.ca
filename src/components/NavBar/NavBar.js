import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { Link as RouterLink } from 'react-router-dom';

import NavDrawer from 'components/NavDrawer';

const NavBar = function() {
  const [drawIsOpen, setDrawIsOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawIsOpen(!drawIsOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='open drawer'
            sx={{ mr: 2 }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <NavDrawer drawIsOpen={drawIsOpen} handleDrawerToggle={handleDrawerToggle} />
          <Button
            variant='text'
            component={RouterLink}
            to='/'
            sx={{
              flexGrow: 1,
              color: 'grey.100',
              justifyContent: 'flex-start',
            }}
          >
            Barry Li
          </Button>
          <IconButton
            compone='a'
            href='https://github.com/jfbarryli'
            target='_blank'
            rel='noopener'
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
