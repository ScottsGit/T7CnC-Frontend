import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Grid,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  AppBar,
  Toolbar,
  Stack
} from "@mui/material";
import Step1Form from "./Step1Form";
import Step2Form from "./Step2Form";
import Step3Form from "./Step3Form";
import { Container } from "reactstrap";
import CssBaseline from '@mui/material/CssBaseline';
import CompanyIcon from '../../assets/images/company-icon.svg';

export const MultiForm = ({ classes }) => {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    password: "",
    zipcode: "",
    mobilePhone: "",
    goals: [],
  });
  const [errors, setErrors] = useState({});
  const [stepCount, setStepCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted", data);
  };

  const handleOnChange = ({ target }) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [target.name]:
        target.value.length <= 3 ? `${target.name} have at least 3 letters` : "",
    }));
    setData((prevData) => ({ ...prevData, [target.name]: target.value }));
  };

  const handleNextStep = () => setStepCount((prevStep) => prevStep + 1);
  const handleBackStep = () => setStepCount((prevStep) => prevStep - 1);

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Step1Form
            inputsObj={{ data, errors }}
            handleChange={handleOnChange}
            handleNext={handleNextStep}
          />
        );
      case 1:
        return (
          <Step2Form
            inputsObj={{ data, errors }}
            handleChange={handleOnChange}
            handleNext={handleNextStep}
            handlePrev={handleBackStep}
          />
        );
      case 2:
        return (
          <Step3Form
            inputsObj={{ data, errors }}
            handleChange={handleOnChange}
            handleNext={handleNextStep}
            handlePrev={handleBackStep}
            handleSubmit={handleSubmit}
          />
        );
      default:
        return (
          <Step1Form
            inputsObj={{ data, errors }}
            handleChange={handleOnChange}
            handleNext={handleNextStep}
          />
        );
    }
  };

  return (
    <Box>
      <AppBar component="nav">
        <Toolbar>
          <Typography
            component="div"
            justifyContent="center"
            alignItems="center"
            sx={{
              flexGrow: 1,
              pt:1
            }}
          >
            <img src={CompanyIcon} alt="Company Logo" />
          </Typography>
        </Toolbar>
      </AppBar>


      <Box component="main" sx={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center"}}>
        <Stack width="80vh">
          <Stepper activeStep={stepCount} sx={{ mb:3 }} alternativeLabel>
            {["Sign Up", "Verify", "Personalize"].map((label) => (
              <Step key={label}>
                <StepLabel sx={{ fontWeight: "bold" }}>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>


          <Grid container maxWidth="md" sx={{
            justifyContent: "center",
            alignItems: "center",
            height: "60vh",
          }}>

            <Grid item xs={12} sm={7}>
              <Box component="form" onSubmit={handleSubmit}>
                {getStepContent(stepCount)}
              </Box>
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </Box>
  );
};
