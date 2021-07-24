import React, { useContext } from 'react'
import { Line } from 'react-chartjs-2'
import {MenbersTotalContext, MenbersNameContext, DaysContext} from './mainChart'

export default function MainChartBody(){
    const days = useContext(DaysContext);
    const menbersTotal = useContext(MenbersTotalContext);
    const menbersName = useContext(MenbersNameContext);
    const numberChart=menbersTotal.length;
    let i=0;
    const menbersDatasets=menbersTotal.map(eachTotal=>{
        return {label: menbersName[i], data:eachTotal}
    });
    // const menbersDatasets:any[]=[];

    for(let num=0;num<numberChart;num++){
        menbersDatasets.push({
                label: menbersName[num],
                data: menbersTotal[num],
                // lineTension: 0.3,
                // backgroundColor: "rgba(78, 115, 223, 0.05)",
                // borderColor: "rgba(78, 115, 223, 1)",
                // pointRadius: 3,
                // pointBackgroundColor: "rgba(78, 115, 223, 1)",
                // pointBorderColor: "rgba(78, 115, 223, 1)",
                // pointHoverRadius: 3,
                // pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
                // pointHoverBorderColor: "rgba(78, 115, 223, 1)",
                // pointHitRadius: 10,
                // pointBorderWidth: 2,
        })
        console.log(num)
        console.log("MenbersName",menbersTotal[num])
    }
    console.log(typeof(menbersDatasets))
    const data = {
        labels:days,
        datasets: menbersDatasets
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

