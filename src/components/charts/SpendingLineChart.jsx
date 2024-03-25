import React, { useState, useEffect, useCallback } from "react";
import Chart from "react-apexcharts";
import { Paper, Typography, Divider, Box} from "@mui/material";

const SpendingLineChart = ({ series = [], categories = [] }) => {
    const [chartSetting, setChartSetting] = useState({
        series: series,
        options: {
            chart: {
                // background: '#f8f9fa',
                height: 350,
                type: 'line',
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight',
                width: 3
            },
            colors: ['#A3A3A3', '#32004C'],
            title: {
                // text: 'Spending',
                align: 'left',
                style: {
                    color: '#32004C',
                    fontSize: '15px'
                }
            },
            grid: {
                row: {
                    colors: ["transparent", "transparent"],
                    opacity: 0.2
                },
                xaxis: {
                    lines: {
                        show: true,
                    },
                },
                yaxis: {
                    lines: {
                        show: true,
                    },
                },

            },
            xaxis: {
                categories: categories,
                title: {
                    // text: 'Day',
                    style: {
                        color: '#32004C',
                        fontSize: '15px'
                    },

                },
                labels: {
                    formatter: function (value) {
                        return 'Day ' + value;
                    },
                    show: true,
                    style: {
                        colors: '#32004C',
                        fontSize: '13px',
                        fontFamily: "'Nunito Sans', sans-serif",
                    },
                },
            },
            yaxis: {
                title: {
                    // text: 'Net Worth',
                    style: {
                        color: '#32004C',
                        fontSize: '15px'
                    },
                },
                labels: {
                    formatter: function (value) {
                        return '$' + value;
                    },
                    show: true,
                    style: {
                        colors: '#32004C',
                        fontSize: '13px',
                        fontFamily: "'Nunito Sans', sans-serif",
                    },
                },
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
        console.log("line charting ..............")
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
                            mb: 5
                        }}>
                        Spending
                    </Typography>
                    <Divider sx={{ color: '#757575', mb: 2 }} ></Divider>
                </Box>
                <Chart options={chartSetting.options} series={chartSetting.series} type="line" height={350} />
            </div>
            <div id="html-dist"></div>
        </Paper>
    )
}

export default SpendingLineChart;