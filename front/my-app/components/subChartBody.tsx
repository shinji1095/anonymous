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

    let sum = 0;
    sumStatusArray.map(sumData => sum += sumData.sum);
    const resultData = sumStatusArray.map( eachSum => eachSum.sum / sum * 100 )

    const data = {

        labels: sumStatusArray.map(sumData => sumData.user.firstname),

        datasets: [
            {
            label: '# of Votes',
            data: resultData,
            backgroundColor: NAMED_COLORS,
            }
        ]
    };

    // // 色（アルファチャンネル）に「4d」を追加（ただし、ホバーしたインデックスは除く）
    // function handleHover(evt, item, legend) {
    //   legend.chart.data.datasets[0].backgroundColor.forEach((color, index, colors) => {
    //     colors[index] = index === item.index || color.length === 9 ? color : color + '4D';
    //   });
    //   legend.chart.update();
    // }

    // // 背景色からアルファチャンネルを削除する
    // function handleLeave(evt, item, legend) {
    //   legend.chart.data.datasets[0].backgroundColor.forEach((color, index, colors) => {
    //     colors[index] = color.length === 9 ? color.slice(0, -2) : color;
    //   });
    //   legend.chart.update();
    // }

    const config = {

        type: 'pie',

        data: data,

        options: {

          responsive: true,

          plugins: {

            legend: {
              position: 'bottom',
              // onHover: handleHover,
              // onLeave: handleLeave,

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