import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import PropTypes from 'prop-types';
import React from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import UserReviews from '../../User/UserReviews/UserReviews/UserReviews';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import Home from './../../../Home/Home/Home/Home';
import AppointmentsAll from './../AppointmentsAll/AppointmentsAll/AppointmentsAll';


const drawerWidth = 150;

const Admin = (props) => {
      let { path, url } = useRouteMatch();
      const { window } = props;
      const [mobileOpen, setMobileOpen] = React.useState(false);
    
      const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
      };
      const drawer = (
            <div>
             
              <Toolbar />
        
            <List>
                  <Link exact to="/dashboard" style={{ textDecoration: 'none' }}>
                        <Button color="inherit" >
                          Reviews
                        </Button>
                  </Link>
                  <Link to={`${url}/appointments`} style={{ textDecoration: 'none' }}>
                        <Button color="inherit" >
                          Appointments
                        </Button>
                  </Link>
                  <Link to={`${url}/admin`} style={{ textDecoration: 'none' }}>
                        <Button color="inherit" >
                          New Admin
                        </Button>
                  </Link>
                  <Link to={`/home`} style={{ textDecoration: 'none' }}>
                        <Button color="inherit" >
                          Home
                        </Button>
                  </Link>
            </List>
            </div>
          );

      const container = window !== undefined ? () => window().document.body : undefined;

      function Item(props) {
      const { sx, ...other } = props;
      return (
      <Box
            sx={{
            bgcolor: 'primary.main',
            color: 'white',
            borderRadius: 1,
            textAlign: 'center',
            fontSize: '1rem',
            fontWeight: '700',
            ...sx,
            }}
            {...other}
      />
    );
  }

  Item.propTypes = {
    sx: PropTypes.oneOfType([
      PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
      ),
      PropTypes.func,
      PropTypes.object,
    ]),
  };
      return (
            <>
               <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              m: 1,
            }}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
              <Item>
                
              </Item>
              <Item>
               
              </Item>
              <Item>
                
              </Item>
            </Toolbar>
          </Box>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
            
                  <Grid container spacing={2}>
                  {/* nested route */}
                  <Grid item xs={12} md={12}>
                  <Switch>
                        <Route exact path="/dashboard">
                          <UserReviews></UserReviews>
                        </Route>
                        <Route path={`${path}/appointments`}>
                          <AppointmentsAll></AppointmentsAll>
                        </Route>
                        <Route path={`${path}/admin`}>
                          <MakeAdmin></MakeAdmin>
                        </Route>
                        <Route path={`/home`}>
                          <Home></Home>
                        </Route>
                  </Switch>
                  </Grid>
                  </Grid>
            
            </Box>
      </Box>
        
            </>
      );
};

export default Admin;