import Script from 'next/script';
import Head from 'next/head';
import Link from "next/link";
import { useCallback } from 'react';
import { FC } from 'react';

export const Login: FC<{
                        login: boolean, 
                        setLoginFunc: (login: boolean) => void
                    }> = ({
                        login,
                        setLoginFunc
                    }) => {

    let onClick = useCallback(() => {
        let url: string = process.env.SERVER_URL + "/validate/user";
        const config = {
            method: "POST"
        }
        fetch(url, config)
        .then(data => data.json())
        .then(data => {
            if (data.status){
                setLoginFunc(login)
            }

        })
    }, [])
    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                <meta name="description" content=""/>
                <meta name="author" content=""/>

                <title>Login</title>

                {/*-- Custom fonts for this template--*/}
                <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css"/>
                <link
                    href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
                    rel="stylesheet"/>

                {/*-- Custom styles for this template--*/}
                <link href="css/sb-admin-2.min.css" rel="stylesheet"/>
            </Head>
            <div className="container">

                {/*-- Outer Row -*/}
                <div className="row justify-content-center">

                    <div className="col-xl-10 col-lg-12 col-md-9">

                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">
                            {/*-- Nested Row within Card Body -*/}
                            <div className="row">
                                <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                        </div>
                                        <form className="user">
                                            <div className="form-group">
                                                <input type="email" className="form-control form-control-user"
                                                    id="exampleInputEmail" aria-describedby="emailHelp"
                                                    placeholder="Enter Email Address..." required/>
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control form-control-user"
                                                    id="exampleInputPassword" placeholder="Password" required/>
                                            </div>
                                            <div className="form-group">
                                                <div className="custom-control custom-checkbox small">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck"/>
                                                    <label className="custom-control-label" htmlFor="customCheck">Remember
                                                        Me</label>
                                                </div>
                                            </div>
                                            <button onClick={onClick} className="btn btn-primary btn-user btn-block">
                                                Login
                                            </button>
                                            <hr/>
                                            <a href="index.html" className="btn btn-google btn-user btn-block">
                                                <i className="fab fa-google fa-fw"></i> Login with Google
                                            </a>
                                            <a href="index.html" className="btn btn-facebook btn-user btn-block">
                                                <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                            </a>
                                        </form>
                                        <hr/>
                                        <div className="text-center">
                                            <Link href="/forgetPassword">
                                                <a className="small" href="forgot-password.html">Forgot Password?</a>
                                            </Link>
                                        </div>
                                        <div className="text-center">
                                            <Link href="/register">
                                                <a className="small">Create an Account!</a>
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
            {/*-- Bootstrap core JavaScript--*/}
            <Script src="vendor/jquery/jquery.min.js"></Script>
            <Script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></Script>

            {/*-- Core plugin JavaScript--*/}
            <Script src="vendor/jquery-easing/jquery.easing.min.js"></Script>

            {/*-- Custom scripts for all pages--*/}
            <Script src="js/sb-admin-2.min.js"></Script>
        </>
    )
}
