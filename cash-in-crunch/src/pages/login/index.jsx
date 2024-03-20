import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button, Container, Divider, Grid, Paper, FormControlLabel, Switch } from "@mui/material";
import Section1BG from '../../assets/images/section1-bg.svg';
import { AuthLayout } from "../../layouts/AuthLayout";
import { GoogleLogin } from "@leecheuk/react-google-login";

const Login = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("form submitted", e);
        const formData = { ...data };
        console.log(formData)
        await axios
            .post(`${process.env.REACT_APP_API_HOST}/auth/login/access-token`, formData)
            .then((response) => {
                console.log("successful login", response.data)

                localStorage.setItem("auth_token", response.data['access_token']);
                localStorage.setItem(
                    "auth_token_type", 
                    response.data['token_type']
                );

                
                navigate('/dashboard')

                // add successfully notif
                toast.success(response?.data?.detail);
                // reload page
                // setTimeout(() => {
                //   window.location.reload();
                // }, 1000);

                console.log(response);
            })
            .catch((error) => {
                console.log(error);
                // add error notif
                toast.error(error.response?.data?.detail);
            });
    }

    const handleOnChange = ({ target }) => {
        setErrors((prevErrors) => ({
            ...prevErrors,
            [target.name]:
                target.value.length <= 3 ? `${target.name} have at least 3 letters` : "",
        }));
        setData((prevData) => ({ ...prevData, [target.name]: target.value }));
    };

    return (
        <AuthLayout>

            <Box component="main" sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: 'column',
                justifyContent: "center",
                backgroundImage: `url(${Section1BG})`, // Set the background image
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',

            }}>
                <Paper elevation={2} sx={{ borderRadius: '10px', mt: -10 }}>
                    <Grid container maxWidth="md" sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: "center",
                        maxWidth: '100%',
                        width: "60vh",
                        pt: '2vh',
                        mb: 5,
                    }}>

                        <Grid item xs={12} sm={7}>

                            <Box component="form" onSubmit={handleSubmit}>

                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        flexGrow: 1,
                                        justifyContent: "space-between", // Align children to the start and end of the container
                                    }}
                                >
                                    <ToastContainer />
                                    <Typography
                                        variant="h3"
                                        align="left" // Align Typography to the left
                                        color="primary"
                                        sx={{
                                            pt: 2,
                                            paddingBottom: "0px",
                                            fontWeight: "bold",
                                            fontSize: "34px",
                                            display: "flex",
                                            flexGrow: 1,
                                        }}
                                        gutterBottom
                                    >
                                        Log In
                                    </Typography>
                                    <FormControlLabel
                                        value="Stay signed in"
                                        control={<Switch defaultChecked color="primary" />}
                                        label="Stay signed in"
                                        labelPlacement="start"
                                        sx={{ align: "right" }}
                                    />
                                </Box>
                                <Divider sx={{ color: '#757575', mb: 2 }}></Divider>
                                <Box sx={{ mb: 2, pt: '2vh', }}>
                                    <TextField
                                        label="Email"
                                        name="email"
                                        type="text"
                                        variant='outlined'
                                        color='primary'
                                        fullWidth={true}
                                        value={data.email}
                                        error={errors.email ? true : false}
                                        helperText={errors.email ? errors.email : ""}
                                        onChange={handleOnChange}
                                        required
                                        sx={{ mb: 2 }}
                                    />
                                    <TextField
                                        label="Password"
                                        name="password"
                                        type="password"
                                        variant='outlined'
                                        color='primary'
                                        fullWidth={true}
                                        value={data.password}
                                        error={errors.password ? true : false}
                                        helperText={errors.password ? errors.password : ""}
                                        onChange={handleOnChange}
                                        required
                                        sx={{ mb: 2 }}
                                    />

                                    <Button
                                        variant="contained"
                                        color="primary"
                                        fullWidth={true}

                                        type="submit"
                                        size="large"
                                        sx={{ mt: 2 }}>
                                        Login
                                    </Button>
                                </Box>

                                <Divider sx={{ color: '#757575', mb: 2 }}>Or</Divider>
                                <Box sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%', flexGrow: 1 }}>
                                    <GoogleLogin
                                        clientId="YOUR_GOOGLE_CLIENT_ID"
                                        buttonText="Sign in with Google"
                                        cookiePolicy={"single_host_origin"}
                                        font-size='40px'
                                        display='flex'
                                        style={{ fontWeight: 'bold', width: "100%", flexGrow: 1 }}
                                    >

                                    </GoogleLogin>
                                </Box>

                            </Box>

                        </Grid>
                    </Grid>
                </Paper>
                <Box sx={{ mt: 2 }}>
                    <Typography align='center'>
                        Already have an account? <Link fontWeight="bold">Sign up</Link>
                    </Typography>
                </Box>
            </Box>
        </AuthLayout>
    )
}

export default Login;
