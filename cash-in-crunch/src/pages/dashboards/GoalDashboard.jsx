import React, { useState, useEffect } from 'react';
import { Box, Stack, Grid, Paper, Typography, } from "@mui/material";
import MLReadme from './T7CnC-ML-Net-Worth-Prediction.png'

// var htmlDoc = {__html: MLReadMe};
const GoalDashboard = () => {

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', maxWidth: '100vw' }}>
      <Stack >
        <Typography variant='h5' color='primary' sx={{ fontWeight: 'bold' }}>
          Net Worth Forcast using Machine Learning Models
        </Typography>

        <Box sx={{ maxWidth: "80%" }}>
          <Typography variant='body1' align='left'>
            *I only have access to Pliad Sandbox data which cannot be used for analysis and model trainning.
            Therefore, I used an open source dataset and trained the models in Jupyter.
          </Typography>
          <Typography variant='body1' align='left'>
            <Typography sx={{ fontWeight: 'bold' }}>Models:</Typography>
            Linear Regression <br />
            Gaussian Process Regressor
          </Typography>
          <Typography variant='body1' align='left'>
            <Typography sx={{ fontWeight: 'bold' }}>Basic Solutions:</Typography>
            1. Train models for each user account, so that each account has its own trained models.<br />
            2. Save the trained models in Database for real-time predicting in the future.
          </Typography>
          <Typography variant='body1' align='left'>
            <Typography sx={{ fontWeight: 'bold' }}>Advanced Solutions:</Typography>
            Data Source -> Data Lake -> Data Warehouse -> Database -> Microservers for Models trainning -> Application Backend -> Client<br />
            Data Source: Plaid<br />
            Ingestion: AWS AppFlow(Data from SaaS) or AWS Glue(ETL real-time data streaming) or Kafka<br />
            Data Lake: AWS Lake Formation or AWS S3<br />
            Data Warehouse: AWS Redshift<br />
            Real-time Data Analysis: AWS Kinesis<br />
            Big Data Processing: AWS EMR or Spark<br />
            Consumers: AWS Athena, AWS QuickSight, AWS SageMaker or Own Microservers
          </Typography>
        </Box>

        <Box
          component="img"
          sx={{
            height: '100%',
            width: '100%',
          }}
          alt="prediction"
          src={MLReadme}
        />
      </Stack >
    </Box>

  )
}

export default GoalDashboard;