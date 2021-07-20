import React, { useState, useEffect} from 'react';
import moment from 'moment'
import MainChartBody from './mainChartBody'
import MainChartHeader from './mainChartHeader'

export const ScoreContext = React.createContext();

export default function MainChart(){
    
    
    const today=moment().format('YYYY-MM-DD')
    const url='http://localhost:8080/do?'//定数

    const params = {
        userID: "1",//定数 
        year: moment(today).year().toString(),
        month: moment(today).month().toString()
    }
    const query_params = new URLSearchParams(params)

    interface dataScore{//objectでcontextしたい
        days: number[];
        daysScore: number[];
        total: number[];
    }

    const dayInMonth=moment(today).daysInMonth()
    let score: dataScore={
        days: [...Array(dayInMonth)].map(()=>0),
        daysScore: [...Array(dayInMonth)].map(()=>0),
        total: []
    };

    // const dayEnd=moment(today).date()
    // let day = 1;

    // do {
    //     score.days.push(day);
    //     day +=1 ;
    // }
    // while (day <= dayEnd);
    
    
    const [error, setError] = useState<any | null>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [status, setStatus] = useState(false);


    // const ScoreContext = React.createContext(0);
    // const [message, setMessage] = useState("");
    // const [scores, setScores] = useState(0);

    useEffect(()=>{
        fetch(url+query_params)
            .then(res => res.json())
            .then(
                (json) => { 
                    setStatus(json.status);
                    // setMessage(json.message);
                    json.data.map(data =>{
                        // const dayInMonth=moment(data.updateAt).daysInMonth()//今月は何日あるか
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
                    })
                    let total=0;
                    score.daysScore.map(scoreDay=>{
                        total+=scoreDay;
                        score.total.push(total);
                    })

                    setIsLoaded(true);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if(status) {
        return <div>Error: {error.message}</div>;
    }else if (!isLoaded){
        return <div>Loading..</div>;
    }else{
        return(
            <div className="col-xl-8 col-lg-7">
                <div className="card shadow mb-4">
                    <MainChartHeader/>
                    <div className="card-body">
                        <ScoreContext.Provider value={score}>
                        <MainChartBody />
                        </ScoreContext.Provider>
                    </div>
                </div>
            </div>
        );
    }
}
