import React, { Component } from 'react'

export default class MainChartBody extends Component {
    render() {
        return (
            <div className="chart-area">
                <canvas id="myAreaChart"></canvas>
            </div>
        )
    }
}
