import Head from 'next/head'
import Script from 'next/script'

import { Topbar } from '../common/topbar'
import Sidebar from '../common/sidebar';
import Logout from '../components/logout';
import Footer from '../common/footer'
import Main from './main';
import Groupreg from './groupReg'
import { useUser } from '../hooks/useUser';
import Layout from '../common/layout';

export const App = () => {
    const {user, loading} = useUser()
    
    return (
        
        <>
        <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <meta name="description" content=""/>
        <meta name="author" content=""/>

        <title>Anonymous</title>
        </Head>
        {
            user?.groupID 
            ? <Main />
            : <Groupreg />
        }
        </>

    );
}

export default App
