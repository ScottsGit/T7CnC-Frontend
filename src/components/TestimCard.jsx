import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import DefaultAvatar from '../assets/images/avatar-default.png';
import TestiBG from '../assets/images/testimonials-bg.svg';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Stack from '@mui/material/Stack';

export const TestimCard = ({avatarImage=DefaultAvatar, name, content, ...props}) => {
    const stars = [];
    // Create an array of StarIcon components based on the rating
    for (let i = 0; i < 5; i++) {
        stars.push(
            <StarIcon key={i} style={{ color: "#FDD443" }} />
        );
    }
    return (
        <Grid item xs={6} sx={{
            backgroundImage: `url(${TestiBG})`, backgroundSize: 'cover', backgroundPosition: 'center',
            position: 'relative', // Add position relative
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
            borderRadius: '20px',
            mt:1,

        }}>
            <Stack sx={{ m: 1 }}>
                <Typography variant="h5" align="left" sx={{
                    padding: '20px', // Add some padding
                    paddingBottom: '0px',
                    fontWeight: "bold",
                    fontSize: "30px",
                }} >
                    {stars}
                </Typography>
                <Typography variant="subtitle1" align="left" sx={{
                    padding: '20px', // Add some padding
                    fontSize: "16px",
                }} >
                    "{content}"
                </Typography>
                <Stack direction="row" spacing={0} sx={{ p: 2 }}>
                    <Typography variant="body1" align="left" sx={{ mt: 5, flexGrow: 1, ml: 1, fontWeight: "bold", }}>{name}</Typography>
                    <Avatar src={avatarImage} sx={{ width: 100, height: 100, mr: 2 }}>W</Avatar>
                </Stack>
            </Stack>
        </Grid>
    )
}
