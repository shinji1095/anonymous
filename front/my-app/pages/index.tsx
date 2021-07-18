import React, { Component } from 'react';
import { useState } from 'react';
import Link from 'next/link';

import App from './app';
import { Login } from './login';

const Index = () => {
    const [login, setLogin] = useState<boolean>(false)
    const setLoginFunc = (login: boolean):void =>{
        setLogin(!login)
    }
    return (
        <>
            {!login ? <Login login={login} setLoginFunc={setLoginFunc}/> :<App/>}
        </>
    );
}

export default Index
