import * as React from 'react';
import { useRef, useEffect, useState, useCallback } from "react";
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LinearProgress from '@mui/material/LinearProgress';

import Logo from '../assets/images/logo.svg';

import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ViewComfyOutlinedIcon from '@mui/icons-material/ViewComfyOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import AdsClickOutlinedIcon from '@mui/icons-material/AdsClickOutlined';
import StackedLineChartOutlinedIcon from '@mui/icons-material/StackedLineChartOutlined';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';

import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';


import accounts from '../assets/images/dashboard/accounts.svg'
import advice from '../assets/images/dashboard/advice.svg'
import cash from '../assets/images/dashboard/cash.svg'
import dashboard from '../assets/images/dashboard/dashboard.svg'
import goals from '../assets/images/dashboard/goals.svg'
import investments from '../assets/images/dashboard/investments.svg'
import plan from '../assets/images/dashboard/plan.svg'
import transactions from '../assets/images/dashboard/transactions.svg'



import PlaidLink from './PlaidLink';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  backgroundColor: theme.palette.primary.main,
  color: '#ffffff',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  backgroundColor: theme.palette.primary.main,
  color: '#ffffff',
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Dashboard({ children }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const [authToken, setAuthToken] = useState(localStorage.getItem('auth_token'));
  const [plaidItem, setPlaidItem] = useState(localStorage.getItem('item_id'));


  const waitPlaidInit = (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center', // Align items center
        height: '90vh', // Use full viewport height
      }}
    >
      <Typography variant="h6" align="center" color='primary' gutterBottom>
        Waiting for Plaid to initialize
      </Typography>
      <LinearProgress color="secondary" sx={{ width: '80%', mt: 2 }} />
    </Box>

  )
  const [progress, setProgress] = useState(null)




  useEffect(() => {
    setAuthToken(localStorage.getItem('auth_token'));
    setPlaidItem(localStorage.getItem('item_id'));
  }, [])

  const handlePlaidItemChange = (token) => {
    console.log("handlePlaidItemChange", token);
    localStorage.setItem('item_id', token);



    // setProgress(<LinearProgress color="secondary" sx={{ display: 'flex', mt: '40vh', height: '10px' }} />)
    setProgress(waitPlaidInit);

    setTimeout(() => {
      setProgress(null)
      setPlaidItem(token);
      window.location.reload();
    }, 3000);
  }

  // const list1 = [
  //   { id: 1, name: 'Dashboard', icon: HomeOutlinedIcon },
  //   { id: 2, name: 'Accounts', icon: accounts },
  //   { id: 3, name: 'Transactions', icon: transactions },
  //   { id: 4, name: 'Cash Flow', icon: cash },
  //   { id: 5, name: 'Plan', icon: plan },
  //   { id: 6, name: 'Goals', icon: goals },
  //   { id: 7, name: 'Investments', icon: investments },
  //   { id: 8, name: 'Advice', icon: advice }];
  const list1 = [
    { id: 0, name: 'Dashboard', icon: <HomeOutlinedIcon /> },
    { id: 1, name: 'Accounts', icon: <ViewComfyOutlinedIcon /> },
    { id: 2, name: 'Transactions', icon: <CurrencyExchangeOutlinedIcon /> },
    { id: 3, name: 'Cash Flow', icon: <LocalAtmOutlinedIcon /> },
    { id: 4, name: 'Plan', icon: <EventAvailableOutlinedIcon /> },
    { id: 5, name: 'Goals', icon: <AdsClickOutlinedIcon /> },
    { id: 6, name: 'Investments', icon: <StackedLineChartOutlinedIcon /> },
    { id: 7, name: 'Advice', icon: <TipsAndUpdatesOutlinedIcon /> }];
  const list2 = [
    { id: 8, name: 'Help', icon: <SupportAgentIcon /> },
    { id: 9, name: 'Setting', icon: <SettingsIcon /> },
    { id: 10, name: 'Profile', icon: <AccountCircleOutlinedIcon /> }];

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const buttonProps = (index) => ({
    selected: selectedIndex === index,
    onClick: () => setSelectedIndex(index),
  });
  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  }

  return (
    <Box sx={{ display: 'flex', flexGrow: 1 }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: '#ffffff', }}>
        <Toolbar>
          <IconButton
            color="primary"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" color="primary" sx={{ display: 'flex', flexGrow: 1, align: 'left' }}>
            Dashboard
          </Typography>

          {!plaidItem && <PlaidLink handlePlaidItemChange={handlePlaidItemChange} />}

        </Toolbar>
      </AppBar>


      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <Typography
            variant='body'
            component="div"
            align='left'
            sx={{
              ml: 2,
              display: 'flex',
              flexGrow: 1
            }}
          >
            <img src={Logo} alt="Logo" sx={{ display: 'flex' }}></img>
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon style={{ color: '#ffffff' }} /> : <ChevronLeftIcon style={{ color: '#ffffff' }} />}
          </IconButton>
        </DrawerHeader>
        <Divider sx={{ backgroundColor: '#4E0673' }} />
        <List>
          {list1.map((item, index) => (
            <ListItem key={item.id} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  '&:focus': { backgroundColor: '#7827A3' },
                  backgroundColor: selectedIndex === index ? '#7827A3' : 'transparent'
                }}
                onClick={() => handleListItemClick(index)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                  style={{ color: '#ffffff' }}
                >
                  {item.icon}
                  {/* <img src={item.icon} alt={item.name}/> */}
                </ListItemIcon>
                <ListItemText primary={item.name} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <List sx={{ mt: 8 }}>
          {list2.map((item, index) => (
            <React.Fragment key={item.id}>
              <ListItem key={item.id} disablePadding sx={{ display: 'block', }} >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    '&:focus': { backgroundColor: '#7827A3' },
                  }}

                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                    style={{ color: '#ffffff' }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.name} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
              {item.name === "Setting" && <Divider sx={{ backgroundColor: '#4E0673' }} />}
            </React.Fragment>
          ))}
        </List>
      </Drawer>
      <Box component="main" backgroundColor='#F6F0F9' sx={{ height: '100%', flexGrow: 1, p: 3, minHeight: '100vh' }}>
        <DrawerHeader />

        {
          (authToken && plaidItem?.length > 0) ? children : progress
        }

      </Box>
    </Box>
  );
}