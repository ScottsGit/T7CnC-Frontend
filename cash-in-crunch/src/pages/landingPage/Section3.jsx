import { Box, Container, Typography, Grid, Stack, Paper, Button } from '@mui/material'
import React from 'react'
import Section3BG from '../../assets/images/section3.png';

import { styled } from '@mui/material/styles';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export const Section3 = () => {


    return (

        <Box component="section"
            sx={{
                zIndex: -10,
                top: 0,
                left: 0,
                right: 0,
                py: 4,
                height: { sm: '120vh', md: '140vh', lg: '140vh', xl: '140vh' },
                backgroundImage: `url(${Section3BG})`, // Set the background image
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                pt: 10
            }}>
{/* 
            <Typography variant="h5" align="center" sx={{
                padding: '20px', // Add some padding
                fontWeight: "bold",
                fontSize: "30px",
                color: "#ffffff"
            }} gutterBottom>
                GET STARTED WITH MONEY MAGNET
            </Typography>

            <Box sx={{ mt: 4, mb:4 }}>
                <Grid container justifyContent="center" spacing={3}>
                    {[0, 1, 2].map((value) => (
                        <Grid key={value} item>
                            <Paper
                                sx={{
                                    height: 280,
                                    width: '33vh',
                                    backgroundColor: (theme) => theme.palette.secondary.main,
                                }}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>

            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>

                <Button variant="contained"
                    sx={{
                        borderRadius: '999px',
                        color: '#32004C',
                        bgcolor: '#C0FFD0',
                        '&:focus': {
                            bgcolor: '#C0FFD0',
                        },
                    }} >
                    Sign up now
                </Button>
                <Button
                    variant="contained"
                    sx={{
                        borderRadius: '999px',
                        bgcolor: (theme) => theme.palette.primary.main,
                        color: '#FFFFFF',
                        border: '1px solid #FFFFFF',
                        '&:focus': {
                            bgcolor: (theme) => theme.palette.primary.main,
                        },
                        mr: 2
                    }}
                    disableElevation
                >
                    Browse Features
                </Button>
            </Box>

            <Box sx={{ mt: 4 }}>
                <Grid container spacing={3}>
                    <Grid item xs>
                        <Item>xs</Item>
                    </Grid>
                    <Grid item xs={8}>
                        <Item>xs=6</Item>
                    </Grid>
                </Grid>
            </Box> */}



        </Box>
    )
}
