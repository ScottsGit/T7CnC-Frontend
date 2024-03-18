import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container, TextField, Stack, Button, Typography, Divider, Link, Grid } from '@mui/material'
import {
    renderInputField,
    renderButton
} from "../../utils/DisplayComponent";

const Step2Form = ({ inputsObj, handleChange, handleNext, handlePrev }) => {
    const { data, errors } = inputsObj;

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
                        Let's confirm your information
                    </Typography>
                    <Typography sx={{
                        padding: '20px', // Add some padding
                        fontSize: "16px",
                    }} paragraph>
                        This way, we can provide a secure login & confirm your identity or contact you about your account.
                    </Typography>
                </Box>


                <Box component="form" noValidate sx={{
                    mb: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={6}>
                            {renderInputField({
                                inputsObj,
                                name: "firstName",
                                label: "First Name",
                                onChange: handleChange,
                                required: true,
                                fullWidth: true
                            })}
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            {renderInputField({
                                inputsObj,
                                name: "lastName",
                                label: "Last Name",
                                onChange: handleChange,
                                required: true,
                                fullWidth: true
                            })}
                        </Grid>
                        <Grid item xs={12}>
                            {renderInputField({
                                inputsObj,
                                name: "zipcode",
                                label: "Zipcode",
                                onChange: handleChange,
                                required: true,
                                fullWidth: true
                            })}
                        </Grid>
                        <Grid item xs={12}>
                            {renderInputField({
                                inputsObj,
                                name: "mobilePhone",
                                label: "Mobile Phone",
                                onChange: handleChange,
                                required: true,
                                fullWidth: true
                            })}
                        </Grid>
                    </Grid>

                    <Stack direction="row" spacing={2} width="100%">
                        {renderButton({ label: "Next", onClick: handleNext, sx: { borderRadius: '999px', display: 'flex' } })}
                        {renderButton({
                            variant: "outlined",
                            label: "Back", onClick: handlePrev,
                            sx: {
                                color: '#32004C',
                                borderRadius: '999px',
                                display: 'flex',
                                bgcolor: '#ffffff',
                                '&:focus': {
                                    bgcolor: '#ffffff',
                                },
                                display: 'flex'
                            }
                        })}
                    </Stack>
                </Box>



                <Box sx={{ mb: 2 }}>
                    <Typography align='left' sx={{ mb: 2 }}>
                        *By providing your phone number and clicking Next, you agree to receiving marketing calls and text messages.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

Step2Form.propTypes = {
    inputsObj: PropTypes.shape({
        data: PropTypes.object.isRequired,
        errors: PropTypes.object.isRequired,
    }).isRequired,
    handleChange: PropTypes.func.isRequired,
    handleNext: PropTypes.func.isRequired,
    handlePrev: PropTypes.func.isRequired,
};

export default Step2Form;
