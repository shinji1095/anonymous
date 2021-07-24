import React, { useContext } from 'react'
import { Line } from 'react-chartjs-2'
import {TotalScoreContext, DaysContext} from './mainChart'

export default function MainChartBody(){
    const days = useContext(DaysContext);
    const totalScore = useContext(TotalScoreContext);



    const data = {
        labels:days,
        datasets: [
            {
                label: "Total Score",
                data: totalScore,
                lineTension: 0.3,
                backgroundColor: "rgba(78, 115, 223, 0.05)",
                borderColor: "rgba(78, 115, 223, 1)",
                pointRadius: 3,
                pointBackgroundColor: "rgba(78, 115, 223, 1)",
                pointBorderColor: "rgba(78, 115, 223, 1)",
                pointHoverRadius: 3,
                pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
                pointHoverBorderColor: "rgba(78, 115, 223, 1)",
                pointHitRadius: 10,
                pointBorderWidth: 2,
            }
        ]
    }

    const options = {

        plugins:{
            legend:{
                labels:{
                    font:{
                        size:15
                    }
                }
            }
        },

        scales: {
            x: {
                title: {
                    display: true,
                    text: "date",
                    font:{
                        size:20,
                        style: "oblique"
                    }
                }
            },
            y: {
                min: 0,
                suggestedMax: 20,
                ticks: {
                    stepSize: 5
                },
                title: {
                    display: true,
                    text: "score",
                    font:{
                        size:20,
                        style: "oblique"
                    }
                }
            }
        }
    }

    return(
        <Line className="chart-area" type={Line} data={data} options={options}/>
    );
}

