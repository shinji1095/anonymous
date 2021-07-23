import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
  <Head>
    {/*-- Custom fonts for this template--*/}
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet" type="text/css"/>
        <link
            href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
            rel="stylesheet"/>

        {/*-- Custom styles for this template--*/}
        <link href="https://cdnjs.cloudflare.com/ajax/libs/startbootstrap-sb-admin-2/4.1.4/css/sb-admin-2.min.css" rel="stylesheet"/>
  </Head>
  <Component {...pageProps} />
  </>

  )
}
export default MyApp
