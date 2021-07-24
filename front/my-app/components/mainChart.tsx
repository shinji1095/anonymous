import React, { useState,useEffect} from 'react';
import moment from 'moment'
import { useUser } from '../hooks/useUser';
import MainChartBody from './mainChartBody'
import MainChartHeader from './mainChartHeader'
import Group from '../type/group';
import User from '../type/user';

export const TitleContext = React.createContext<string>("");
export const DaysContext = React.createContext<number[]>([]);
export const MenbersTotalContext = React.createContext<any[]>([]);

const getDaysArrayByMonth=(dayInMonth:number)=>{
    const arrDays = [];
    for(let i=1;i<=dayInMonth; i++)arrDays.push(i);
    return arrDays;
}

export const MainChart = () =>{
    
    interface dataScore{
        days: number[];
        daysScore: number[];
        total: number[];
    }
    const {user, loading} = useUser()
    const [today, setToday] = useState<string>("");
    const [days, setDays] = useState<number[]>([]);
    const [menbersTotal, setMenbersTotal] = useState<any[]>([]);

    useEffect(() => {
        const today=moment().format('YYYY-MM-DD')
        const dayInMonth=moment(today).daysInMonth()

        const params = {
            year: moment(today).year().toString(),
            month: (moment(today).month()+1).toString()
        }
        
        
        if(user){
            let url_group = `/api/group/${user.groupID}`

            
            fetch(url_group)
            .then(res => res.json())
            .then((res) => {
                console.log("groupData: ", res)
                let group: Group=res.data
                
                group.users.map((user: User)=>{

                    const url=`api/do?userID=${user?.id}\&year=${params.year}\&month=${params.month}`//定数

                    let score: dataScore={
                        days: getDaysArrayByMonth(dayInMonth),
                        daysScore: [...Array(moment(today).date())].map(()=>0),
                        total: []
                    };

                    let menbersTotal:any[]

                    fetch(url)

                    .then(res => res.json())
                    .then((userData) => {

                        userData.forEach((data:any)=>{
                            const indexDate=moment(data.updateAt).date()-1;
                            if(data.ranking==1){
                                score.daysScore[indexDate]+=(5-data.ranking);//5-data.rankingでポイント
                            }else if(data.ranking==2){
                                score.daysScore[indexDate]+=(5-data.ranking);
                            }else if(data.ranking==3){
                                score.daysScore[indexDate]+=(5-data.ranking);
                            }else{
                                score.daysScore[indexDate]+=(5-data.ranking);
                            }
                        });
                        let total=0;
                        score.daysScore.map(scoreDay=>{
                            total+=scoreDay;
                            score.total.push(total);
                        })
                        menbersTotal.push(score.total)
                        console.log("menbersTotal:", menbersTotal)
                        setToday(today)
                        setDays(score.days)
                        setMenbersTotal(menbersTotal)
                    })
                    .catch(err => console.log(err))
                });
            })
            .catch(err => console.log(err))
        }
    },[loading]);
    return(
        <div className="col-xl-8 col-lg-7">
            <div className="card shadow mb-4">
                <TitleContext.Provider value={today}>
                    <MainChartHeader/>
                </TitleContext.Provider>
                <div className="card-body">
                    <DaysContext.Provider value={days}>
                    <MenbersTotalContext.Provider value={menbersTotal}>
                        <MainChartBody />
                    </MenbersTotalContext.Provider>
                    </DaysContext.Provider>
                </div>
            </div>
        </div>
    );
}


export default MainChart

