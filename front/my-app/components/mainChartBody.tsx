import React, { useContext } from 'react'
import { Line } from 'react-chartjs-2'
import {MenbersTotalContext, MenbersNameContext, DaysContext} from './mainChart'

export default function MainChartBody(){
    const days = useContext(DaysContext);
    const menbersTotal = useContext(MenbersTotalContext);
    const menbersName = useContext(MenbersNameContext);
    const numberChart=menbersTotal.length;

    interface graphData{
        label:string,
        data:number[],
        lineTension:number,
        pointRadius:number,
        pointHoverRadius: number,
        pointHitRadius: number,
        pointBorderWidth: number,
        backgroundColor: string,
        borderColor: string,
        pointBackgroundColor: string,
        pointBorderColor: string,
        pointHoverBackgroundColor: string,
        pointHoverBorderColor: string
    }
    const menbersDatasets:graphData[]=[]
    
    for(let num=0;num<numberChart;num++){
        let color:string=""
        if(num===0){
            color='#ff7f7f'
        }else if(num===1){
            color='#ffbf7f'
        }else if(num===2){
            color='#ffff7f'
        }else if(num===3){
            color='#7fff7f'
        }else if(num===4){
            color='#7f7fff'
        }else if(num===5){
            color='#bf7fff'
        }else if(num===5){
            color='#bf7fff'
        }
        menbersDatasets.push({
                label: menbersName[num],
                data: menbersTotal[num],
                lineTension: 0.3,
                backgroundColor: color,
                borderColor: color,
                pointRadius: 3,
                pointBackgroundColor: color,
                pointBorderColor: color,
                pointHoverRadius: 3,
                pointHoverBackgroundColor: color,
                pointHoverBorderColor: color,
                pointHitRadius: 10,
                pointBorderWidth: 2,
        })
    }
    console.log("MenbersData",menbersDatasets)

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

