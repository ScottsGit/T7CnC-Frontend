import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CompanyIcon from '../../assets/images/company-icon.svg';



const drawerWidth = 240;
const navItems = ['Feature', 'Learn', 'Download'];
const authItems = ['Sign In', 'Sign Up'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
      </Typography>
      {/* <Divider /> */}
      <List>
        {[...navItems, ...authItems].map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
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

          <Typography
            variant="h6"
            component="div"
            align='left'
            sx={{
              mr: 10,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img src={CompanyIcon} alt="Company Logo" sx={{ display: { xs: 'none', md: 'flex' } }} />
          </Typography>
          <Box align="left" sx={{ display: { xs: 'none', sm: 'block', flexGrow: 1 } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{
                borderRadius: '999px',
                color: '#fff',
                mr: 1,
              }}>
                {item}
              </Button>
            ))}
          </Box>
          <Box sx={{ align: "right", display: { xs: 'none', sm: 'block' }, mr: 5 }}>
            <Button variant="contained"
              sx={{
                borderRadius: '999px',
                color: '#32004C',
                bgcolor: '#ffffff',
                '&:focus': {
                  bgcolor: '#ffffff',
                },
                mr: 2
              }}
              disableElevation>
              Sign In
            </Button>
            <Button variant="contained"
              href="/signup"
              sx={{
                borderRadius: '999px',
                color: '#32004C',
                bgcolor: '#C0FFD0',
                '&:focus': {
                  bgcolor: '#C0FFD0',
                },
              }} >
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
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
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;