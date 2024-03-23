
import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Stack, Grid, Paper, Typography } from "@mui/material";
import ApexCharts from 'apexcharts'

import SpendingLineChart from "../../components/charts/SpendingLineChart";
import NetworthColumnChart from "../../components/charts/NetworthColumnChart";
import TransactionsTable from "../../components/charts/TransactionsTable";
import CategoryPolarChart from "../../components/charts/CategoryPolarChart";

import CircularProgress from '@mui/material/CircularProgress';
import AccountBalanceSharpIcon from '@mui/icons-material/AccountBalanceSharp';


const MainDashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authToken, setAuthToken] = useState(localStorage.getItem('auth_token'));
  const [itemId, setItemId] = useState(localStorage.getItem('item_id'));
  const [spendingLineChartData, setSpendingLineChartData] = useState(null);
  const [networthColumnChartData, setNetworthColumnChartData] = useState(null);
  const [transactionsData, setTransactionsData] = useState(null);
  const [balanceData, setBalanceData] = useState(null);
  const [categorySpendingData, setCategorySpendingData] = useState(null);


  const navigate = useNavigate();

  const getLineChart = React.useCallback(async () => {
    setLoading(true);
    // console.log(authToken)
    const response = await fetch(`${process.env.REACT_APP_API_HOST}/plaid/spending-line-chart`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      }
    });
    const res = await response.json();

    setSpendingLineChartData(res['result'])
    setLoading(false);
  }, [setSpendingLineChartData, setLoading, authToken]);


  const getColumnChart = React.useCallback(async () => {
    setLoading(true);
    const response = await fetch(`${process.env.REACT_APP_API_HOST}/plaid/networth-column-chart`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      }
    });
    const res = await response.json();

    setNetworthColumnChartData(res['result'])
    setLoading(false);
  }, [setNetworthColumnChartData, setLoading, authToken]);


  const getTransactions = React.useCallback(async () => {
    setLoading(true);
    const response = await fetch(`${process.env.REACT_APP_API_HOST}/plaid/transactions`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      }
    });
    const res = await response.json();

    setTransactionsData(res['result'])
    setLoading(false);
  }, [setTransactionsData, setLoading, authToken]);

  const getBalance = React.useCallback(async () => {
    setLoading(true);
    const response = await fetch(`${process.env.REACT_APP_API_HOST}/plaid/balance`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      }
    });
    const res = await response.json();

    setBalanceData(res['result']['balance'])
    setLoading(false);
  }, [setBalanceData, setLoading, authToken]);

  const getCategorySpending = React.useCallback(async () => {
    setLoading(true);
    const response = await fetch(`${process.env.REACT_APP_API_HOST}/plaid/spends-polar-chart`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      }
    });
    const res = await response.json();

    setCategorySpendingData(res['result'])
    setLoading(false);
  }, [setCategorySpendingData, setLoading, authToken]);

  useEffect(() => {
    if (authToken == null) {
      navigate('/login')
    } else {
      if (itemId != null) {
        getBalance();
        getLineChart();
        getColumnChart();
        getTransactions();
        getCategorySpending();
      }
    }

  }, [authToken, getBalance, getColumnChart, getLineChart, getTransactions, getCategorySpending, navigate, itemId]);

  useEffect(() => {
    console.log("updating dashboard ...............")
    console.log(balanceData);
    console.log(spendingLineChartData);
    console.log(networthColumnChartData);
    console.log(transactionsData);
    console.log(categorySpendingData);
  }, [spendingLineChartData, networthColumnChartData, transactionsData, balanceData, categorySpendingData]);


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
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems:'center',
                  height: 130,
                  width: 260,
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}
              >
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}>
                  <Typography variant='subtitle1'
                    align='left'
                    color="primary"
                    sx={{
                      // fontWeight: 'bold',
                      paddingX: 2,
                      paddingY: 1
                    }}>
                    {item.name}
                  </Typography>
                  <Typography variant='h5'
                    align='left'
                    color="primary"
                    sx={{
                      fontWeight: '600',
                      paddingX: 2
                    }}>
                    ${item.current}
                  </Typography>
                  <Typography variant='body2'
                    align='left'
                    sx={{
                      fontWeight: 'bold',
                      paddingX: 2,
                      paddingY: 1
                    }}>
                    Available: ${item.available}
                  </Typography>
                </Box>

                <Box sx={{mr: 3, pb:5}}>
                    <AccountBalanceSharpIcon color='primary' sx={{width: '41px', height: '41px'}}/>
                </Box>

              </Paper>
            </Grid>
          ))}
        </Grid>



        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={6}>
            {networthColumnChartData && <NetworthColumnChart series={networthColumnChartData.series} />}
          </Grid>
          <Grid item xs={6}>
            {spendingLineChartData && <SpendingLineChart series={spendingLineChartData.series} />}
          </Grid>
          <Grid item xs={6}>
            {transactionsData && <TransactionsTable rows={transactionsData.latest_transactions} />}
          </Grid>
          <Grid item xs={6}>
            {categorySpendingData && <CategoryPolarChart series={categorySpendingData.series} categories={categorySpendingData.categories} />}
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