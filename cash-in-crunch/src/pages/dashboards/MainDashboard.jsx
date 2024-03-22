
import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Stack, Grid, Paper, Typography } from "@mui/material";
import ApexCharts from 'apexcharts'

import SpendingLineChart from "../../components/charts/SpendingLineChart";
import NetworthColumnChart from "../../components/charts/NetworthColumnChart";
import TransactionsTable from "../../components/charts/TransactionsTable";

import CircularProgress from '@mui/material/CircularProgress';



const MainDashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authToken, setAuthToken] = useState(localStorage.getItem('auth_token'));
  const [spendingLineChartData, setSpendingLineChartData] = useState(null);
  const [networthColumnChartData, setNetworthColumnChartData] = useState(null);
  const [transactionsData, setTransactionsData] = useState(null);
  const [balanceData, setBalanceData] = useState(null);


  const navigate = useNavigate();

  const getLineChart = React.useCallback(async () => {
    setLoading(true);
    const response1 = await fetch(`${process.env.REACT_APP_API_HOST}/plaid/networth-line-chart`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      }
    });
    const res = await response1.json();
    console.log(res['result']['series'])
    setSpendingLineChartData(res['result'])


    setLoading(false);
  }, [setSpendingLineChartData, setLoading]);


  const getColumnChart = React.useCallback(async () => {
    setLoading(true);
    const response2 = await fetch(`${process.env.REACT_APP_API_HOST}/plaid/networth-column-chart`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      }
    });
    const res2 = await response2.json();
    console.log(res2['result'])
    setNetworthColumnChartData(res2['result'])
    setLoading(false);
  }, [setNetworthColumnChartData, setLoading]);


  const getTransactions = React.useCallback(async () => {
    setLoading(true);
    const response2 = await fetch(`${process.env.REACT_APP_API_HOST}/plaid/transactions`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      }
    });
    const res2 = await response2.json();
    console.log(res2['result'])
    setTransactionsData(res2['result'])

    setLoading(false);
  }, [setTransactionsData, setLoading]);

  const getBalance = React.useCallback(async () => {
    setLoading(true);
    const response2 = await fetch(`${process.env.REACT_APP_API_HOST}/plaid/balance`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      }
    });
    const res2 = await response2.json();
    console.log(res2['result'])
    setBalanceData(res2['result']['balance'])

    setLoading(false);
  }, [setBalanceData, setLoading]);

  useEffect(() => {
    if (authToken == null) {
      navigate('/login')
    }
    getBalance();
    getLineChart();
    getColumnChart();
    getTransactions();
  }, [authToken]);

  useEffect(() => {
    console.log("updating dashboard ...............")
    console.log(balanceData);
    console.log(spendingLineChartData);
    console.log(networthColumnChartData);
    console.log(transactionsData);
  }, [spendingLineChartData, networthColumnChartData]);


  return (
    <React.Fragment>
      {loading && <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
        }}
      >
        <CircularProgress color="primary" />
      </Box>}

      <Stack sx={{ display: 'flex', justifyContent: 'center' }}>
        <Grid container spacing={2} justifyContent="center">
          {balanceData && balanceData.map((item) => (
            <Grid key={item.name} item>
              <Paper
                sx={{
                  height: 130,
                  width: 260,
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}
              >
                <Typography variant="h6"
                  align='left'
                  color="primary"
                  sx={{
                    fontWeight: 'bold',
                    p:2
                  }}>
                  {item.name}
                </Typography>
                <Typography variant='h5'
                  align='left'
                  sx={{
                    fontWeight: 'bold',
                    pX:2
                  }}>
                  ${item.current}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>



        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={6}>
            {networthColumnChartData && <NetworthColumnChart series={networthColumnChartData.series} />}
          </Grid>
          <Grid item xs={6}>
            {spendingLineChartData && <SpendingLineChart series={spendingLineChartData.series} categories={spendingLineChartData.xaxis.categories} />}
          </Grid>
          <Grid item xs={6}>
            {transactionsData && <TransactionsTable rows={transactionsData.latest_transactions} />}
          </Grid>
        </Grid>
      </Stack>
    </React.Fragment>
  )
}

export default MainDashboard;


// {!loading &&
//   data != null &&
//   Object.entries(data).map((entry, i) => (
//     <pre key={i} align='left'>
//       <code>{JSON.stringify(entry[1], null, 2)}</code>
//     </pre>
//   )
//   )}