import Head from 'next/head'
import Script from 'next/script'

import { Topbar } from '../common/topbar'
import Sidebar from '../common/sidebar';
import Logout from '../components/logout';
import Footer from '../common/footer'
import Main from '../components/main';
import Groupreg from '../components/groupReg'
import { useUser } from '../hooks/useUser';

export const App = () => {
    const {user, loading} = useUser()
    
    return (
        
        <div id="page-top">
        <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <meta name="description" content=""/>
        <meta name="author" content=""/>

        <title>Anonymous</title>

        </Head>
            {/*-- Page Wrapper -*/}
            <div id="wrapper" >

        {/* sidebar */}
            <Sidebar />

            {/*-- Content Wrapper */}
            <div id="content-wrapper" className="d-flex flex-column">
                    <Topbar />

                {
                    user?.groupID 
                    ? <Main />
                    : <Groupreg />
                }

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
        <Script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" strategy="beforeInteractive"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"></Script> 

        {/*-- Core plugin JavaScript-*/}
        {/* <Script src="vendor/jquery-easing/jquery.easing.min.js"></Script> */}

        {/*-- Custom scripts for all pages-*/}
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/startbootstrap-sb-admin-2/4.1.4/js/sb-admin-2.min.js"></Script>
        </div>
    );
}

export default App
