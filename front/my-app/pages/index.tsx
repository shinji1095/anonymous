import React from 'react';
import { useState } from 'react';

import App from './app';
import { Login } from './login';

import { UserIdContext } from '../contexts/appContext';
import { GroupIdContext } from '../contexts/appContext';

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
            <UserIdContext.Provider value={{setUserIdFunc:setUserIdFunc}}>
            <GroupIdContext.Provider value={{setGroupIdFunc:setGroupIdFunc}}>
                {!login ? <Login setLoginFunc={setLoginFunc} setGroupIdFunc={setGroupIdFunc}/> :<App/>}
            </GroupIdContext.Provider>
            </UserIdContext.Provider>
        </>
    );
}

export default Index
