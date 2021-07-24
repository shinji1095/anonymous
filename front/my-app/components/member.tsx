import React from 'react'
import { FC } from 'react'
import User from '../type/user'
import { 
        useState,
        useLayoutEffect,
     } from 'react'

const  Member:FC<{user:User, num:number}> = ({user, num}) => {
    const [color, setColor] = useState<string>("")
    const colorList = [
                        "bg-primary",
                        "bg-success",
                        "bg-danger",
                        "bg-secondary",
                        "bg-warning text-dark",
                        "bg-info text-white",
                        "bg-dark"
                    ]
    useLayoutEffect(() => {
        let index = num < 7 ? num : num % 7
        setColor(colorList[index])
    })
    return (
        <div className="col-lg-12 mb-4">
            <div className={"card shadow " + color}>
                <div className="card-body text-white">
                    {user.firstname + " " + user.lastname}
                    <div className="text-white-50 small">{user.email}</div>
                </div>
            </div>
        </div>
    )
}

export default Member
