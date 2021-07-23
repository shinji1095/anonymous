import { ReactNode } from 'react'
import Script from 'next/script'
import {Topbar} from "./topbar"
import Sidebar from "./sidebar"
import Footer from "./footer"
import Logout from "../components/logout"

type Props = {
  children: ReactNode;
}

export default function Layout({ children, ...props }: Props) {
    return (
        <>
        <div id="page-top" {...props}>
        <div id="wrapper" >

            <Sidebar />

            <div id="content-wrapper" className="d-flex flex-column">
                <Topbar />

                {children}

                <Footer />

            </div>

        </div>

        <a className="scroll-to-top rounded" href="#page-top">
            <i className="fas fa-angle-up"/>
        </a>

        <Logout />
        <Script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" strategy="beforeInteractive"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"></Script> 

        {/*-- Core plugin JavaScript-*/}
        {/* <Script src="vendor/jquery-easing/jquery.easing.min.js"></Script> */}

        {/*-- Custom scripts for all pages-*/}
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/startbootstrap-sb-admin-2/4.1.4/js/sb-admin-2.min.js"></Script>
        </div>
        </>
        )
  }