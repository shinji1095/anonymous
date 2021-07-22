import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'

import { useState } from 'react'
import { FC } from 'react'

import { Topbar } from '../common/topbar'
import Sidebar from '../common/sidebar';
import Main from './main';
import Logout from '../components/logout';
import Footer from '../common/footer'
import Groupreg from './groupReg'

export const App: FC<{groupID: number, setGroupIDFunc: (groupID: number)=>void}> 
                    = ({groupID, setGroupIDFunc}) => {
    // const [groupID, setGroupID] = useState<number | null>();
    // const setGroupIDFunc = (groupID:number):void => {
    //     setGroupID(groupID)
    // }
    return (
        
        <div id="page-top">
        <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <meta name="description" content=""/>
        <meta name="author" content=""/>

        <title>Anonymous</title>

        {/*-- Custom fonts for this template--*/}
        <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css"/>
        <link
            href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
            rel="stylesheet"/>

        {/*-- Custom styles for this template--*/}
        <link href="css/sb-admin-2.min.css" rel="stylesheet"/>
        </Head>
            {/*-- Page Wrapper -*/}
            <div id="wrapper" >

        {/* sidebar */}
            <Sidebar />

            {/*-- Content Wrapper */}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*-- Topbar */}
                <Topbar/>
                {/*-- End of Topbar */}

                {/*-- Main Content */}
                {
                    groupID ? <Main />: <Groupreg setGroupIDFunc={setGroupIDFunc}/>
                }
                {/*-- End of Main Content */}

                {/*-- Footer */}
                <Footer />
                {/*-- End of Footer */}

            </div>
            {/*-- End of Content Wrapper */}

        </div>
        {/*-- End of Page Wrapper */}

        {/*-- Scroll to Top Button*/}
        <a className="scroll-to-top rounded" href="#page-top">
            <i className="fas fa-angle-up"/>
        </a>

        {/*-- Logout Modal*/}
        <Logout />
        {/*-- Bootstrap core JavaScript-*/}
        <Script src="vendor/jquery/jquery.min.js" strategy="beforeInteractive"></Script>
        <Script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></Script> 

        {/*-- Core plugin JavaScript-*/}
        {/* <Script src="vendor/jquery-easing/jquery.easing.min.js"></Script> */}

        {/*-- Custom scripts for all pages-*/}
        <Script src="js/sb-admin-2.min.js"></Script>

        {/*-- Page level plugins -*/}
        <Script src="vendor/chart.js/Chart.min.js"></Script>

        </div>
    );
}

export default App
