import React, {useEffect, useState} from 'react'
import { useUser } from '../hooks/useUser';
import moment from 'moment'
import Card from './card'
import Assignment from '../type/assignment';

const getDayIndex=(day: string, assignmentName: string)=>{
    interface dayOfWeek{
        index: number,
        assignment: string,
        date: string, 
    }

    let outData: dayOfWeek={
        index: 0,
        assignment: assignmentName,
        date: ""
    }
    
    if(day==="sunday"){
        outData.date="Sunday";
    }else if(day==="monday"){
        outData.index=1;
        outData.date="Monday";
    }else if(day==="tuesday"){
        outData.index=2;
        outData.date="Tuesday";
    }else if(day==="wednesday"){
        outData.index=3;
        outData.date="Wednesday";
    }else if(day==="thursday"){
        outData.index=4;
        outData.date="Thursday";
    }else if(day==="friday"){
        outData.index=5;
        outData.date="Friday";
    }else if(day==="saturday"){
        outData.index=6;
        outData.date="Saturday";
    }
    return outData
};

const getWeekIndex=(index: number)=>{
    const week=7
    if(index>=7)
        index=index-week;
    return index
};

export const CardHolder = () =>{

    interface dataAssignment{
        assignment: Assignment[];
        date: string;
    };
    
    const [cardData, setCardData] = useState<any[]>([]); 
    const [assID, setAssID] = useState<number[]>()
    const {user, loading} = useUser()
    
    useEffect(() => {
        // const url=`api/assignment/${user?.groupID}`;
        const url=`api/assignment/1`;


        const todayIndex=parseInt(moment().format('e'));

        const assignmentsData: dataAssignment[] = [
            {assignment: [], date: ""},
            {assignment: [], date: ""},
            {assignment: [], date: ""},
            {assignment: [], date: ""},
            {assignment: [], date: ""},
            {assignment: [], date: ""},
            {assignment: [], date: ""}
        ]

        let resultData: Array<any>=[]

        
        const config = {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
            },
    }
        fetch(url, config)
        .then(res => res.json())
        .then((res) => { 
                let assignments: Assignment[] = res.data 
                let assIDArray = assignments.map(ass => ass.id)
                setAssID(assIDArray)

                assignments.forEach((assignment:Assignment)=>{
                    const transData=getDayIndex(assignment.due, assignment.name);
                    console.log(transData)
                    for(let i=0;i<=6;i++){
                        if(transData.index===getWeekIndex(todayIndex+i)){
                            assignmentsData[i].date=transData.date
                            assignmentsData[i].assignment.push(assignment)
                        }
                    }
                    resultData=assignmentsData.filter(assignmentData => assignmentData.date!=="")
                    if(resultData.length>4){
                        resultData=resultData.splice(0,3)
                    }
                });
                setCardData(resultData)
            })
            .catch(err => console.log(err))
        },[loading])

        let num = 1
        
        const card=cardData.map((data: dataAssignment)=>
                    <Card key={num++} assign={data.assignment} date={data.date}/>
        )

        return (
            <>
                {card}
            </>
    )
}

export default CardHolder