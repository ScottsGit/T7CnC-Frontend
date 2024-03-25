import React from 'react'
import Section1BG from '../../assets/images/section1-bg.svg';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import DashboardImg from '../../assets/images/dashboard.png';

export const Section1 = () => {
  return (
    <Box 
        sx={{
            p: 10,
            height: { sm: '120vh', md: '140vh', lg: '140vh', xl: '140vh' },
            backgroundImage: `url(${Section1BG})`, // Set the background image
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}
      >

        <Container maxWidth="md" sx={{
                color: "#32004C"}}>
            <Typography variant="h5" align="center" sx={{
                padding: '20px', // Add some padding
                paddingBottom: '0px',
                fontWeight: "bold",
                fontSize: "30px",
            }} gutterBottom>
                ELEVATE YOUR FINANCIAL PLANNING
            </Typography>
            <Typography variant="subtitle1" align="center" sx={{
                padding: '20px', // Add some padding
                fontSize: "18px",
            }} paragraph>
                Gain confidence in your goals and safely track all of your accounts, transactions, and investments in one platform.
            </Typography>
            <Button variant="contained" color="primary" sx={{ borderRadius: '999px' }}>
                Get Started
            </Button>
            <Typography
                component="div"
                align="center"
                sx={{ maxWidth: '100%', height: 'auto', padding: '20px', paddingTop: '80px' }}
            >
                <img src={DashboardImg} alt="Dashboard Image" style={{ width: '100%' }} />
            </Typography>
        </Container>
    </Box>

  )
}
