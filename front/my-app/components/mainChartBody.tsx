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
        scales: {
                xAxis: [{
                    scaleLabel: {
                        display: true,
                        lfontSabelString: "date",
                    }
                }],
                yAxis: [{
                    ticks: {
                        padding: 10,
                        min: 0,
                        stepSize: 5,
                        beginAtZero: true
                    },
                    title: {
                        display: true,
                        text: "score"
                    }
                }]
            }
    }

    return(
        <Line className="chart-area" type={Line} data={data} options={options}/>
    );
}

