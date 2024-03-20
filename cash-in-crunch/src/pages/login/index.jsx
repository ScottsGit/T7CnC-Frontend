import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button, Container, Divider } from "@mui/material";

const Login = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log("form submitted", data);
        const formData = { ...data };

        await axios
            .post(`${process.env.REACT_APP_API_HOST}/auth/login`, formData)
            .then((response) => {

                console.log("successful login")
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
        <Container>
            <Box>
                <ToastContainer />
                <Typography variant="h5" align="center" color="primary" sx={{
                    padding: '20px',
                    paddingBottom: '0px',
                    fontWeight: "bold",
                    fontSize: "30px",
                }} gutterBottom>
                    Sign up for free!
                </Typography>
                <Typography sx={{
                    pb: '20px',
                    fontSize: "16px",
                }} paragraph>
                    Create an account in order to gain access to all of Money Magnet's unique features. This is required!
                </Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
                <TextField
                    label="Email"
                    name="email"
                    type="text"
                    variant='outlined'
                    color='primary'
                    size='small'
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
                    type="text"
                    variant='outlined'
                    color='primary'
                    size='small'
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
                    fullWidth={false}
                    onClick={handleLogin}
                    sx={{ mt: 2 }}>
                    Login
                </Button>
            </Box>
            <Box sx={{ mb: 2 }}>
                <Typography align='left'>
                    Already have an account? <Link fontWeight="bold">Sign in</Link>
                </Typography>
            </Box>


            <Divider>Or</Divider>

        </Container>
    )
}

export default Login;
