import React, { Component, ReactEventHandler } from 'react'
import { useState } from 'react'
import { useCallback } from 'react'
import { useRouter } from 'next/router'
import Head from "next/head"
import Script from 'next/script'
import Link from 'next/link'

interface UserData{
    firstname: string,
    lastname: string,
    email: string,
    password: string
}
const initUserData: UserData = {
    firstname: "",
    lastname: "",
    email: "",
    password: ""
}

export default function Register() {
    let url = process.env.SERVER_URL
    const router = useRouter()
    const [userData, setUserData] = useState<UserData>(initUserData);
    const handleChangeFunc = (dataname: string) => {
        const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
            let value = e.target.value;
            switch (dataname){
                case "firstname":
                    setUserData({...userData, firstname:value})
                    break;
                case "lastname":
                    setUserData({...userData, lastname:value})
                    break;
                case "email":
                    setUserData({...userData, email:value})
                    break;
                case "password":
                    setUserData({...userData, password: value})
                    break;
            }
        }
        return handleChange
    }
    const handleClick = useCallback(() => {
        let url = "/api/user";
        console.log(userData)
        const config = {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
            },
            body:JSON.stringify(userData)
        }
        fetch(url, config)
        .then(data => data.json())
        .then(json => {
            console.log(json)
            if (json.status){
                alert("register complete!")
                router.push("/app")
            }
        })
        .catch(err => console.log(err))

    }, [userData])
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

            <div className="bg-gradient-primary">

            <div className="container">

                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                        {/*-- Nested Row within Card Body -*/}
                        <div className="row">
                            <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
                            <div className="col-lg-7">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                                    </div>
                                    <div className="user">
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input type="text" className="form-control form-control-user" id="exampleFirstName"
                                                    placeholder="First Name" name="firstname" required onChange={handleChangeFunc("firstname")}/>
                                            </div>
                                            <div className="col-sm-6">
                                                <input type="text" className="form-control form-control-user" id="exampleLastName"
                                                    placeholder="Last Name" name="lastname" required onChange={handleChangeFunc("lastname")}/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control form-control-user" id="exampleInputEmail"
                                                placeholder="Email Address" name="email" required onChange={handleChangeFunc("email")}/>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input type="password" className="form-control form-control-user"
                                                    id="exampleInputPassword" placeholder="Password" name="password" required onChange={handleChangeFunc("password")}/>
                                            </div>
                                            <div className="col-sm-6">
                                                <input type="password" className="form-control form-control-user"
                                                    id="exampleRepeatPassword" placeholder="Repeat Password" name="passwordConfirm" required/>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-user btn-block" onClick={handleClick}>
                                            Register Account
                                        </button>
                                        <hr/>
                                        <a href="index.html" className="btn btn-google btn-user btn-block">
                                            <i className="fab fa-google fa-fw"></i> Register with Google
                                        </a>
                                        <a href="index.html" className="btn btn-facebook btn-user btn-block">
                                            <i className="fab fa-facebook-f fa-fw"></i> Register with Facebook
                                        </a>
                                    </div>
                                    <hr/>
                                    <div className="text-center">
                                        <Link href="/forgetPassword">
                                            <a className="small" href="forgot-password.html">Forgot Password?</a>
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

            {/*-- Bootstrap core JavaScript-*/}
            <Script src="vendor/jquery/jquery.min.js"></Script>
            <Script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></Script>

            {/*-- Core plugin JavaScript-*/}
            <Script src="vendor/jquery-easing/jquery.easing.min.js"></Script>

            {/*-- Custom scripts for all pages-*/}
            <Script src="js/sb-admin-2.min.js"></Script>

        </div>
        </>
        )
    }

