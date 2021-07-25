import React, { Component, useState, useEffect } from 'react'
import moment from 'moment'
import SubChartBody from './subChartBody'
import SubChartHeader from './subChartHeader'
import { useUser } from '../hooks/useUser';
import Group from '../type/group';
import User from '../type/user';
import Do from '../type/do';
import SumStatus from '../type/sumStatus';

export const TotalScoreContext = React.createContext<number[]>([]);

export default function SubChart(){

    const [sumStatus, setSumStatus] = useState<SumStatus[]>([])
    const {user, loading} = useUser()

    useEffect(() => {

        const today=moment().format('YYYY-MM-DD')
        
        const params = {

            year: moment(today).year().toString(),
            month: (moment(today).month()+1).toString()

        }
        
        if(user){

            let url_group = `/api/group/${user.groupID}`

            fetch(url_group)

            .then(res => res.json())

            .then((res) => {
                
                console.log(res)

                let group: Group = res.data

                let sumStatusArray: { sum: number, id: number, user: User }[] = group.users.map((user: User) => {

                    return { id: user.id, sum: 0, user }

                })

                let index = 0

                group.users.map((user: User)=>{

                    const url = `/api/do?userID=${user.id}\&year=${params.year}\&month=${params.month}` //定数

                    fetch(url)

                    .then(res => res.json())

                    .then((a) => {

                        let data: Do[] = a.data
                        
                        console.log(data)

                        let sum = 0

                        data.map((d:Do) => {

                            sumStatusArray.filter(sumStatus => {
                                if(sumStatus.id == d.userID){
                                    sumStatus.sum += 5- d.ranking
                                } 
                            })

                        }) 

                        if(index++ == 1){
                            console.log(sumStatusArray)
                            setSumStatus(sumStatusArray)

                        }
                        
                    })
                    
                    .catch(err => console.log(err))

                });
            })

            .catch(err => console.log(err))

        }
        
    }, [loading]);


    return (
        <div className="col-xl-4 col-lg-5">
            <div className="card shadow mb-4">
                <SubChartHeader/>
                <SubChartBody sumStatusArray = {sumStatus}/>
            </div>
        </div>

    )
}
