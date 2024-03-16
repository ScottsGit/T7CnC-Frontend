import React from 'react'
import NavBar from './NavBar'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Section1BG from '../../assets/images/section1-bg.svg';

export const Landing = () => {
  return (
    <div>
        Landing
        <NavBar/>
        <Container maxWidth="md">
            <Typography variant="h3" align="center" sx={{
                backgroundImage: Section1BG,
                color: "primary", // Set the text color
                padding: '20px', // Add some padding
            }} gutterBottom>
                ELEVATE YOUR FINANCIAL PLANNING
            </Typography>
            <Typography variant="subtitle1" align="center" paragraph>
                Gain confidence in your goals and safely track all of your accounts, transactions, and investments in one platform.
            </Typography>
            <Button variant="contained" color="primary" sx={{ borderRadius: '999px' }}>
                Get Started
            </Button>
        </Container>

    </div>
  )
}
