import { SyntheticEvent } from 'react';

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
import ArchitectureIcon from '@mui/icons-material/Architecture';
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
      <Box sx={(theme) => ({
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
            <HomeIcon />
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
            <InfoIcon />
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
            <PublicIcon />
          </ListItemIcon>
          <ListItemText primary='Travel' />
        </ListItem>
        <ListItem
          button
          onClick={handleDrawerToggle}
          component={RouterLink}
          to='/projects'
        >
          <ListItemIcon>
            <ArchitectureIcon />
          </ListItemIcon>
          <ListItemText primary='Projects' />
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
            <ContactPageIcon />
          </ListItemIcon>
          <ListItemText primary='Contact' />
        </ListItem>
      </List>
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
