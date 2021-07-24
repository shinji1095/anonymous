import React, { FC } from 'react';
import CardHolder from '../components/cardHolder';
import MainChart from '../components/mainChart';
import SubChart from '../components/subChart';
import DarbyChart from '../components/darbyChart';

import Layout from '../common/layout';

import { useUser } from '../hooks/useUser';
import MemberAll from '../components/membarAll';

const Main = () => {
    return (
        <Layout>
        <div id="content">
            {/*-- Begin Page Content */}
            <div className="container-fluid">

                {/*-- Page Heading */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                    
                </div>

                {/*-- Content Row */}
            <div className="row">
                {/*-- Earnings (Monthly) Card Example */}
                <CardHolder/>
            </div>

                {/*-- Content Row */}

            <div className="row">

                {/*-- Area Chart */}
                <MainChart/>
                {/*-- Pie Chart */}
                <SubChart/>
            </div>

                {/*-- Content Row */}
                <div className="row">

                    {/*-- Content Column */}
                    <div className="col-lg-6 mb-4">

                        {/*-- Project Card Example */}
                        <DarbyChart/>

                        {/*-- Color System */}
                        

                    </div>
                        <MemberAll/>                   
                </div>

            </div>
            {/*-- /.container-fluid */}

        </div>
        </Layout>
    );
}

export default Main;
