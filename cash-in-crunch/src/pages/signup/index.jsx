import React, { useState, createContext } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import CompanyIcon from '../../assets/images/company-icon.svg';
import axios from "axios";
import { toast } from "react-toastify";

const MultiForm = ({ classes }) => {
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
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("form submitted", data);
    const formData = {...data};
    await axios
      .post(`http://localhost:8888/register`, formData)
      .then((response) => {
        // move to sign in page
        navigate("/login");

        console.log("successful registered")

        // add successfully notif
        toast.success(response?.data?.detail);
        // reload page
        setTimeout(() => {
          window.location.reload();
        }, 1000);

        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        // add error notif
        toast.error(error.response?.data?.detail);
      });
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

  const handleGoalChange = ({ goals }) => {
    console.log(goals)
    setData((prevData) => ({ ...prevData, goals: goals }));
  }

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
            handlePrev={handleBackStep}
            handleSubmit={handleSubmit}
            handleGoalChange={handleGoalChange}
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
    <React.Fragment>
      <AppBar component="nav">
        <Toolbar>
          <Typography
            component="div"
            justifyContent="center"
            alignItems="center"
            sx={{
              flexGrow: 1,
              pt: 1
            }}
          >
            <img src={CompanyIcon} alt="Company Logo" />
          </Typography>
        </Toolbar>
      </AppBar>


      <Box component="main" sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Stack sx={{ width: "60%", pt: '12vh' }}>
          <Stepper activeStep={stepCount} sx={{ mb: 2 }} alternativeLabel>
            {["Sign Up", "Verify", "Personalize"].map((label) => (
              <Step key={label}>
                <StepLabel sx={{ fontWeight: "bold" }}>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>


          <Grid container maxWidth="md" sx={{
            justifyContent: "center",
            alignItems: "center",

          }}>

            <Grid item xs={12} sm={7}>
              <Box component="form" onSubmit={handleSubmit}>

                {getStepContent(stepCount)}

              </Box>
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </React.Fragment>
  );
};
export default MultiForm;