import React from 'react'

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';

export const Section2GridRight = ({ imgUrl, title, content, sx={}, ...props }) => {


    return (

        <Grid container spacing={10} flexWrap="wrap-reverse" alignItems="center" sx={sx}>

            <Grid item xs={12} md={6}>
                <Stack spacing={2} sx={{ maxWidth: 480 }}>
                    <Typography variant="h7" align="center" sx={{
                        padding: '20px', // Add some padding
                        paddingBottom: '0px',
                        fontWeight: "bold",
                        fontSize: "22px",
                    }} gutterBottom>
                        {title}
                    </Typography>

                    <Typography variant="subtitle1" align="center" sx={{
                        padding: '20px', // Add some padding
                        fontSize: "18px",
                    }} paragraph>
                        {content}
                    </Typography>
                </Stack>
            </Grid>

            <Grid item xs={12} md={6}>
                <img
                    src={imgUrl}
                    style={{ width: "100%", objectFit: "contain" }}
                />
            </Grid>
        </Grid>
    )
}
