import React, { useState, useEffect} from 'react';
import moment from 'moment'
import MainChartBody from './mainChartBody'
import MainChartHeader from './mainChartHeader'

export const ScoreContext = React.createContext();

export default function MainChart(){
    
    const date=moment().format('YYYY-MM-DD')

    interface dataSore{
        day: number[]
        total: number[]
    }
    const url='/do?'//定数
    const params = {
        userID: "1",//定数 
        year: moment(date).year().toString(),
        month: moment(date).month().toString()
    }
    
    let score: dataSore
    // const ScoreContext = React.createContext(0);
    const [error, setError] = useState<any | null>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [status, setStatus] = useState(false);
    // const [message, setMessage] = useState("");
    // const [scores, setScores] = useState(0);

    const query_params = new URLSearchParams(params)
    useEffect(()=>{
        fetch(url+query_params)
            .then(res => res.json())
            .then(
                (json) => { 
                    setStatus(json.status);
                    // setMessage(json.message);
                    json.data.map(data =>{
                        const dayInMonth=moment(data.updateAt).daysInMonth()//今月は何日あるか
                        const indexDate=moment(data.updateAt).date();
                        if(data.ranking==1){
                            score.total[indexDate]+=5-data.ranking;//5-data.rankingでポイント
                        }else if(data.ranking==2){
                            score.total[indexDate]+=5-data.ranking;
                        }else if(data.ranking==3){
                            score.total[indexDate]+=5-data.ranking;
                        }else{
                            score.total[indexDate]+=5-data.ranking;
                        }
                    })
                    setIsLoaded(true);
                }
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
                        <ScoreContext.Provider value={{score.total}}>
                        <MainChartBody />
                        </ScoreContext.Provider>
                    </div>
                </div>
            </div>
        );
    }
}
