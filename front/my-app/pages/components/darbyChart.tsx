import React, { Component } from 'react'

export default class DarbyChart extends Component {
    render() {
        return (
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
                </div>
                <div className="card-body">
                    <h4 className="small font-weight-bold">Server Migration <span
                            className="float-right">20%</span></h4>
                    <div className="progress mb-4">
                        <div className="progress-bar bg-danger" role="progressbar" style={{"width": "20%"}}></div>
                    </div>
                    <h4 className="small font-weight-bold">Sales Tracking <span
                            className="float-right">40%</span></h4>
                    <div className="progress mb-4">
                        <div className="progress-bar bg-warning" role="progressbar" style={{"width": "40%"}}></div>
                    </div>
                    <h4 className="small font-weight-bold">Customer Database <span
                            className="float-right">60%</span></h4>
                    <div className="progress mb-4">
                        <div className="progress-bar" role="progressbar" style={{"width": "60%"}}></div>
                    </div>
                    <h4 className="small font-weight-bold">Payout Details <span
                            className="float-right">80%</span></h4>
                    <div className="progress mb-4">
                        <div className="progress-bar bg-info" role="progressbar" style={{"width": "80%"}}></div>
                    </div>
                    <h4 className="small font-weight-bold">Account Setup <span
                            className="float-right">Complete!</span></h4>
                    <div className="progress">
                        <div className="progress-bar bg-success" role="progressbar" style={{"width": "100%"}}></div>
                    </div>
                </div>
            </div>
        )
    }
}
