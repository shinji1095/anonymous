import React from 'react';
import { useState } from 'react';

import App from './app';
import { Login } from './login';

const Index = () => {
    const [login, setLogin] = useState<boolean>(false);
    const [userID, setUserID] = useState<number>(0)
    const [groupID, setGroupID] = useState<number>(0)

    const setUserIdFunc = (userID:number):void => {
        setUserID(userID)
    }
    const setGroupIdFunc = (groupID:number) => {
        setGroupID(groupID)
    }
    const setLoginFunc = (login: boolean):void =>{
        setLogin(login)
    }
    return (
        <>
            {
                !login 
                ? <Login 
                    setLoginFunc={setLoginFunc} 
                    setGroupIdFunc={setGroupIdFunc} 
                    setUserIdFunc={setUserIdFunc}
                /> 
                : <App 
                    userID={userID} 
                    groupID={groupID} 
                    setGroupIDFunc={setGroupIdFunc}
                />
            }
        </>
    );
}

export default Index
