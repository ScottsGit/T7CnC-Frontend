import React from 'react'
import { useEffect } from "react";
import NavBar from './NavBar'
import Box from '@mui/material/Box';
import { Section1 } from './Section1';
import { Section2 } from './Section2';
import { Section3 } from './Section3';

const Landing = () => {

  useEffect(() => {
    localStorage.clear();
  })
  


  return (
    <React.Fragment>
      <NavBar />
      <Box component="main" sx={{mt:4}}>
        <Section1 />
        <Section2 />
        <Section3 />
      </Box>
    </React.Fragment>
  )
}

export default Landing;
