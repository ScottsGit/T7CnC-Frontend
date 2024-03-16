import React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const Section2 = () => {
  return (
    <Container sx={{ mt: { xs: 5, md: 10, lg: 15 } }}>
        <Container maxWidth="md" sx={{
                color: "#32004C"}}>
            <Typography variant="h5" align="center" sx={{
                padding: '20px', // Add some padding
                paddingBottom: '0px',
                fontWeight: "bold",
                fontSize: "30px",
            }} gutterBottom>
                WHO WE ARE
            </Typography>
            <Typography variant="subtitle1" align="center" sx={{
                padding: '20px', // Add some padding
                fontSize: "18px",
            }} paragraph>
                At Money Magnet, we use AI to strategically plan and personailze the financial needs for both individuals and families with no charge.
            </Typography>
        </Container>

        <Grid container spacing={10} flexWrap="wrap-reverse" alignItems="center">
            <Grid item xs={12} md={6}>

            </Grid>

            <Grid item xs={12} md={6}>

            </Grid>
        </Grid>

        <Grid
            container
            spacing={10}
            flexWrap="wrap-reverse"
            alignItems="center"
            sx={{ mt: { xs: 10, md: 15 } }}
        >
        <Grid item xs={12} md={6}>

        </Grid>

        <Grid item xs={12} md={6}>

        </Grid>
      </Grid>
    
    </Container>
  )
}
