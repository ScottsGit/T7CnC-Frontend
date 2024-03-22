import React, { useState, useEffect, useCallback } from "react";
import Chart from "react-apexcharts";
import { Paper, Typography, Divider, Box } from "@mui/material";

const NetworthColumnChart = ({ series = [] }) => {

    const [chartSetting, setChartSetting] = useState({
        series: series,
        options: {
            chart: {
                type: 'bar',
                height: 350
            },
            colors: ['#32004C'],
            xaxis: {
                type: 'category',
                labels: {
                    formatter: function (val) {
                        const [year, month] = val.split('-');
                        return new Date(year, parseInt(month) - 1).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
                    },
                    show: true,
                    style: {
                        colors: '#32004C',
                        fontSize: '12px'
                    },
                },

            },
            yaxis: {
                labels: {
                    formatter: function (value) {
                        return '$' + value;
                    },
                    show: true,
                    style: {
                        colors: '#32004C',
                        fontSize: '12px'
                    },
                },
            },
            title: {
                // text: 'Net Worth',
                style: {
                    color: '#32004C',
                    fontSize: '15px'
                }
            },
            tooltip: {
                x: {

                }
            },
            responsive: [{
                breakpoint: 600,
                options: {
                    chart: {
                        toolbar: {
                            show: !1
                        }
                    },
                    legend: {
                        show: !1
                    }
                }
            }]
        },
    })

    useEffect(() => {
        console.log("column charting ..............")
        console.log(series)
    })

    return (
        <Paper sx={{ p: 1 }}>
            <div id="chart">
                <Box >
                    <Typography variant="h6"
                        align='left'
                        color="primary"
                        sx={{
                            ml: 2,
                            fontWeight: 'bold',
                            mb:5
                        }}>
                        Net Worth
                    </Typography>
                    <Divider sx={{ color: '#757575', mb: 2 }} ></Divider>
                </Box>
                <Chart options={chartSetting.options} series={chartSetting.series} type="bar" height={380} />
            </div>
            <div id="html-dist"></div>
        </Paper>
    )
}

export default NetworthColumnChart;