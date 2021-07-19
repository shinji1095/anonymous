import React, { Component } from 'react'
import SubChartBody from './subChartBody'
import SubChartHeader from './subChartHeader'

export default class SubChart extends Component {
    render() {
        return (
            <div className="col-xl-4 col-lg-5">
                <div className="card shadow mb-4">
                    {/*-- Card Header - Dropdown */}
                    <SubChartHeader/>
                    {/*-- Card Body */}
                    <SubChartBody/>
                </div>
            </div>

        )
    }
}
