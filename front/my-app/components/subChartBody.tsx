import React, { Component } from 'react'
import { Pie } from 'react-chartjs-2'

export const CHART_COLORS = {
    red: '#ff7f7f',
    orange: '#ffbf7f',
    yellow: '#ffff7f',
    green: '#7fff7f',
    blue: '#7f7fff',
    purple: '#bf7fff',
    lightblue: '#7fbfff'
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

  export const CHART_NAMES = {
    one: 'さつき',
    two: 'しんじ',
    three: 'たか',
    four: 'よしみつ',
    five: 'ごっち',
  };
  
  const NAMED_NAMES = [
    CHART_NAMES.one,
    CHART_NAMES.two,
    CHART_NAMES.three,
    CHART_NAMES.four,
    CHART_NAMES.five,
  ];

export default function SubChartBody(){

    const DATA_COUNT = 5;
    const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};

    const data = {
        labels: NAMED_NAMES,
        datasets: [
            {
            label: 'Dataset 1',
            data: [1,4,3,4,5],
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
              position: 'none',
            },

            // title: {
            //   display: true,

            //   text: 'none'
            // }
          }
        },
      };


        return (
            <div className="card-body">

                    <Pie data={data} options={config.options} />

                <div className="mt-4 text-center small">

                    <span className="mr-2">
                        <i className="fas fa-circle" style={{color: CHART_COLORS.red}}></i> あか
                    </span>

                    <span className="mr-2">
                        <i className="fas fa-circle" style={{color: CHART_COLORS.orange}}></i> みどり
                    </span>

                    <span className="mr-2">
                        <i className="fas fa-circle" style={{color: CHART_COLORS.yellow}}></i> きいろ
                    </span>

                </div>

            </div>

        )
}
