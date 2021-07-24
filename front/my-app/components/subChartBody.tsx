import React, { Component } from 'react'
import { Pie } from 'react-chartjs-2'
import SumStatus from '../type/sumStatus';
import { FC } from 'react';

export const CHART_COLORS = {
    red: '#ff7f7f',
    orange: '#ffbf7f',
    yellow: '#ffff7f',
    green: '#7fff7f',
    blue: '#7f7fff',
    purple: '#bf7fff',
    lightblue: '#7fbfff',
  };
  
  const NAMED_COLORS = [
    CHART_COLORS.red,
    CHART_COLORS.orange,
    CHART_COLORS.yellow,
    CHART_COLORS.green,
    CHART_COLORS.blue,
    CHART_COLORS.purple,
    CHART_COLORS.lightblue,
  ];

const SubChartBody: FC<{sumStatusArray: SumStatus[]}>=({sumStatusArray}) => {

    const DATA_COUNT = 5;
    const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};
    let sum = 0;
    sumStatusArray.map(sumData => sum += sumData.sum);
    const resultData = sumStatusArray.map( eachSum => eachSum.sum / sum * 100 )

    const data = {

        labels: sumStatusArray.map(sumData => sumData.user.firstname),

        datasets: [
            {
            label: 'Dataset 1',
            data: resultData,
            backgroundColor: NAMED_COLORS,
            }
        ]
    };

    const config = {

        type: 'pie',

        data: data,

        options: {

          responsive: true,

          plugins: {

            legend: {

              position: 'bottom',

            },
          },
        },
      };

        return (
            <div className="card-body">

                <div id="wrapper">
                    <Pie type={Pie} data={data} options={config.options} />
                </div>               

            </div>
        )
}

export default SubChartBody