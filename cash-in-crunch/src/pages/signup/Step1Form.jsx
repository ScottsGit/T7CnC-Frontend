import React from 'react'
import { Box, Container, TextField, Stack, Button, Typography, Divider, Link } from '@mui/material'
import { Formik } from 'formik';
import { GoogleLogin } from "@leecheuk/react-google-login";
import {
    renderInputField,
    renderButton
} from "../../utils/DisplayComponent";

const Step1Form = ({ inputsObj, handleChange, handleNext }) => {
    return (
        <Box>
            <Container>
                <Box>
                    <Typography variant="h5" align="center" color="primary" sx={{
                        padding: '20px', // Add some padding
                        paddingBottom: '0px',
                        fontWeight: "bold",
                        fontSize: "30px",
                    }} gutterBottom>
                        Sign up for free!
                    </Typography>
                    <Typography sx={{
                        pb: '20px', // Add some padding
                        fontSize: "16px",
                    }} paragraph>
                        Create an account in order to gain access to all of Money Magnet's unique features. This is required!
                    </Typography>
                </Box>

                <Box sx={{ mb: 2}}>
                    {renderInputField({
                        inputsObj,
                        name: "email",
                        label: "Email",
                        onChange: handleChange,
                    })}
                    {renderInputField({
                        inputsObj,
                        name: "password",
                        label: "Password",
                        type: "password",
                        onChange: handleChange,
                    })}

                    {renderButton({ label: "Next", onClick: handleNext, sx: { borderRadius: '999px', display: 'flex', } })}
                </Box>
                <Box sx={{ mb: 2}}>
                    <Typography align='left' sx={{ mb: 2}}>
                        *By clicking providing your information, you agree to our <Link>Terms of Use
                        </Link> and <Link>Privacy Policy</Link>.
                    </Typography>
                    <Typography align='left'>
                        Already have an account? <Link fontWeight="bold">Sign in</Link>
                    </Typography>
                </Box>


                <Divider>Or</Divider>

                {/* <GoogleLogin
                    clientId="YOUR_GOOGLE_CLIENT_ID"
                    buttonText="Sign in with Google"
                    onSuccess={responseGoogle}
                    onFailure={onFailureGoogle}
                    cookiePolicy={"single_host_origin"}
                /> */}

            </Container>
        </Box>
    )
}

export default Step1Form;