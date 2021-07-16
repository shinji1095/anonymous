import React, { Component } from 'react'
import MainChartBody from './mainChartBody'
import MainChartHeader from './mainChartHeader'

export default class MainChart extends Component {
    render() {
        return (
            <div className="col-xl-8 col-lg-7">
                <div className="card shadow mb-4">
                    {/*-- Card Header - Dropdown */}
                    <MainChartHeader/>
                    {/*-- Card Body */}
                    <div className="card-body">
                        <MainChartBody/>
                    </div>
                </div>
            </div>
        )
    }
}
