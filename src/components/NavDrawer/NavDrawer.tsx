import { SyntheticEvent } from 'react';

import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Divider from '@mui/material/Divider';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PublicIcon from '@mui/icons-material/Public';
import ContactPageIcon from '@mui/icons-material/ContactPage';

import { Link as RouterLink } from 'react-router-dom';

type EventHandler = (event: SyntheticEvent<{}, Event>) => void;

type Props = {
  drawIsOpen: boolean,
  handleDrawerToggle: EventHandler,
}

const drawerWidth = 240;

const iOS =
  typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

const NavDrawer = function ({ drawIsOpen, handleDrawerToggle }: Props) {
  const drawer = (
    <div>
      <Box component='div' sx={(theme) => ({
        ...theme.mixins.toolbar,
        padding: theme.spacing(0, 1),
        display: 'flex',
        flexDirection: 'row-reverse',
      })}>
        <IconButton onClick={handleDrawerToggle}>
          <ChevronLeftIcon />
        </IconButton>
      </Box>
      <Divider />
      <List>
        <ListItem
          button
          onClick={handleDrawerToggle}
          component={RouterLink}
          to='/'
        >
          <ListItemIcon>
            <HomeIcon color='secondary' />
          </ListItemIcon>
          <ListItemText primary='Home' />
        </ListItem>
        <ListItem
          button
          onClick={handleDrawerToggle}
          component={RouterLink}
          to='/about'
        >
          <ListItemIcon>
            <InfoIcon color='secondary' />
          </ListItemIcon>
          <ListItemText primary='About' />
        </ListItem>
        <ListItem
          button
          onClick={handleDrawerToggle}
          component={RouterLink}
          to='/travel'
        >
          <ListItemIcon>
            <PublicIcon color='secondary' />
          </ListItemIcon>
          <ListItemText primary='Travel' />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem
          button
          onClick={handleDrawerToggle}
          component={RouterLink}
          to='/contact'
        >
          <ListItemIcon>
            <ContactPageIcon color='secondary' />
          </ListItemIcon>
          <ListItemText primary='Contact' />
        </ListItem>
      </List>
      <Link
        href='mailto:contact@barryli.ca'
        underline='none'
        align='center'
        sx={{
          padding: '1em',
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translate(-50%)',
        }}
      >
        <Divider />
        <Typography variant='subtitle1' component='div'>
          contact@barryli.ca
        </Typography>
      </Link>
    </div>
  );

  return (
    <SwipeableDrawer
      variant="temporary"
      open={drawIsOpen}
      onClose={handleDrawerToggle}
      onOpen={() => {}}
      ModalProps={{
        keepMounted: true,
      }}
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
      sx={{
        display: 'block',
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
      }}
    >
      {drawer}
    </SwipeableDrawer>
  );
}

export default NavDrawer;
