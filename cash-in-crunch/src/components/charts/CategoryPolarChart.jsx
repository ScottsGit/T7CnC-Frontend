import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { Paper, Typography, Divider, Box } from "@mui/material";


const CategoryPolarChart = ({ series = [], categories = [] }) => {

    const [chartSetting, setChartSetting] = useState({
        series: series,
        options: {
            chart: {
                height: 380,
                type: "polarArea"
            },
            stroke: {
                colors: ["#fff"]
            },
            fill: {
                opacity: .8
            },
            labels: categories,
            legend: {
                position: "bottom"
            },
            // colors: ["#4254ba", "#17a497", "#fa5c7c"],
            // responsive: [{
            //     breakpoint: 480,
            //     options: {
            //         chart: {
            //             width: 200
            //         },
            //         legend: {
            //             position: "bottom"
            //         }
            //     }
            // }]
        }
    })


    useEffect(() => {
        console.log("Category polar charting ..............")
        console.log(categories)
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
                            mb: 5
                        }}>
                        Category Spending
                    </Typography>
                    <Divider sx={{ color: '#757575', mb: 2 }} ></Divider>
                </Box>
                <Chart options={chartSetting.options} series={chartSetting.series} type="polarArea" />
            </div>
            <div id="html-dist"></div>
        </Paper>
    )
}
export default CategoryPolarChart;