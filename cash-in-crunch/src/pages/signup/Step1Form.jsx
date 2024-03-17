import React from 'react'
import { Box, Container, TextField, Stack, Button, Typography, Divider } from '@mui/material'
import { GoogleLogin } from "@leecheuk/react-google-login";

export const Step1Form = () => {
    return (
        <Box>
            <Container>
                <Box>
                    <Typography>

                    </Typography>
                    <Typography>

                    </Typography>
                </Box>

                <Box>
                    <form></form>
                </Box>

                <Box>
                    <Typography>

                    </Typography>
                    <Typography>

                    </Typography>
                </Box>

                <Divider></Divider>

                <GoogleLogin
                    clientId="YOUR_GOOGLE_CLIENT_ID"
                    buttonText="Sign in with Google"
                    onSuccess={responseGoogle}
                    onFailure={onFailureGoogle}
                    cookiePolicy={"single_host_origin"}
                />

            </Container>
        </Box>
    )
}
