import React from 'react'
import { Typography, AppBar, Toolbar, } from "@mui/material";
import CompanyIcon from '../assets/images/company-icon.svg';

export const AuthLayout = ({children}) => {
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

    {children}
    </React.Fragment>
  )
}
