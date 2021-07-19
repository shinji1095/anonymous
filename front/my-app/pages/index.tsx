import React, { Component } from 'react';
import { useState } from 'react';
import Link from 'next/link';

import App from './app';
import { Login } from './login';

const Index = () => {
    const [login, setLogin] = useState<boolean>(false);
    const [userID, setUserID] = useState<number>(0);
    const setLoginFunc = (login: boolean):void =>{
        alert("called!")
        setLogin(login)
    }
    return (
        <>
            {!login ? <Login setLoginFunc={setLoginFunc}/> :<App/>}
        </>
    );
}

export default Index
