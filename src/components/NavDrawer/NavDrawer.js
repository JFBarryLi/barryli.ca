import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { Link as RouterLink } from 'react-router-dom';

const drawerWidth = 240;

const NavDrawer = function (props) {
  const drawer = (
    <div>
      <div sx={(theme) => ({
        ...theme.mixins.toolbar,
        padding: theme.spacing(0, 1),
        display: 'flex',
        alignItems: 'center',
        justifContent: 'flex-start',
      })}>
        <IconButton onClick={props.handleDrawerToggle}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItem
          button
          onClick={props.handleDrawerToggle}
          component={RouterLink}
          to='/'
        >
          <ListItemIcon>
          </ListItemIcon>
          <ListItemText primary='Home' />
        </ListItem>
        <ListItem
          button
          onClick={props.handleDrawerToggle}
          component={RouterLink}
          to='/about'
        >
          <ListItemIcon>
          </ListItemIcon>
          <ListItemText primary='About' />
        </ListItem>
        <ListItem
          button
          onClick={props.handleDrawerToggle}
          component={RouterLink}
          to='/travel'
        >
          <ListItemIcon>
          </ListItemIcon>
          <ListItemText primary='Travel' />
        </ListItem>
        <ListItem
          button
          onClick={props.handleDrawerToggle}
          component={RouterLink}
          to='/projects'
        >
          <ListItemIcon>
          </ListItemIcon>
          <ListItemText primary='Projects' />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem
          button
          onClick={props.handleDrawerToggle}
          component={RouterLink}
          to='/contact'
        >
          <ListItemIcon>
          </ListItemIcon>
          <ListItemText primary='Contact' />
        </ListItem>
      </List>
    </div>
  );

  return (
    <Drawer
      variant="temporary"
      open={props.drawIsOpen}
      onClose={props.handleDrawerToggle}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        display: { xs: 'block', sm: 'none' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
      }}
    >
      {drawer}
    </Drawer>
  );
}

export default NavDrawer;
