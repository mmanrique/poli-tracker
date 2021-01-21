
import Chart from "chart.js";
import React, { useEffect } from 'react'
import StatsData from './data/stats'
function Stats() {
    let chartRef: any = React.createRef();
    let stats_data = StatsData()
    useEffect(() => {
        const myChartRef = chartRef.current.getContext("2d");
        new Chart(myChartRef, {
            type: "horizontalBar",
            data: {
                //Bring in data
                labels: [""],
                datasets: [
                    {
                        label: "No Sentenciados",
                        backgroundColor: Chart.helpers.color("green").alpha(0.5).rgbString(),
                        borderColor: "green",
                        data:[stats_data.sentenicas_congresal.no_sentencias]
                    },
                    {
                        label: "Sentenciados",
                        backgroundColor: Chart.helpers.color("red").alpha(0.5).rgbString(),
                        borderColor: "red",
                        data: [stats_data.sentenicas_congresal.sentencias ],
                    },
                ]
            },
            options: {
                responsive: true,
                elements: {
                    rectangle: {
                        borderWidth: 2,
                    }
                },
                legend: {
                    position: 'right',
                },
                title: {
                    display: true,
                    text: 'Candidatos Sentenciados'
                }
                //Customize chart options
            }
        });
    }, [])
    return (
        <>
            <canvas
                id="myChart"
                ref={chartRef}
            />
        </>
    )

}

export default Stats;