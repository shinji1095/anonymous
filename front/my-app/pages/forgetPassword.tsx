import React, { Component } from 'react'
import Script from 'next/script'
import Head from 'next/head'
import Link from 'next/link'

export default class ForgetPassword extends Component {
    render() {
        return (
            <>
            <Head>
                <meta charSet="utf-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                <meta name="description" content=""/>
                <meta name="author" content=""/>

                <title>Forgot Password</title>
            </Head>
            <div className="bg-gradient-primary">

                <div className="container">

                    {/*-- Outer Row -*/}
                    <div className="row justify-content-center">

                        <div className="col-xl-10 col-lg-12 col-md-9">

                            <div className="card o-hidden border-0 shadow-lg my-5">
                                <div className="card-body p-0">
                                    {/*-- Nested Row within Card Body -*/}
                                    <div className="row">
                                        <div className="col-lg-6 d-none d-lg-block bg-password-image"></div>
                                        <div className="col-lg-6">
                                            <div className="p-5">
                                                <div className="text-center">
                                                    <h1 className="h4 text-gray-900 mb-2">Forgot Your Password?</h1>
                                                    <p className="mb-4">We get it, stuff happens. Just enter your email address below
                                                        and we&apos;ll send you a link to reset your password!</p>
                                                </div>
                                                <form className="user">
                                                    <div className="form-group">
                                                        <input type="email" className="form-control form-control-user"
                                                            id="exampleInputEmail" aria-describedby="emailHelp"
                                                            placeholder="Enter Email Address..."/>
                                                    </div>
                                                    <a href="login.html" className="btn btn-primary btn-user btn-block">
                                                        Reset Password
                                                    </a>
                                                </form>
                                                <hr/>
                                                <div className="text-center">
                                                    <Link href="/register">
                                                        <a className="small">Create an Account!</a>
                                                    </Link>
                                                </div>
                                                <div className="text-center">
                                                    <Link href="/login">
                                                        <a className="small">Already have an account? Login!</a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

                {/*-- Bootstrap core JavaScript-*/}
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
}
