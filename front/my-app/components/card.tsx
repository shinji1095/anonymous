import { FC, useEffect, useState} from 'react'
import Assignment from '../type/assignment';
import CardSwitch from './cardSwitch'

export const Card: FC<{assign:Assignment[], date:string}> 
                    = ({assign, date}) =>{
                        const [colorState, setColorState] = useState<string>("");
                        useEffect(() => {
                            if(date==="Monday"){
                                setColorState("primary");
                            }else if(date==="Tuesday"){
                                setColorState("secondary");
                            }else if(date==="Wednesday"){
                                setColorState("info");
                            }else if(date==="Thursday"){
                                setColorState("success");
                            }else if(date==="Friday"){
                                setColorState("warning");
                            }else if(date==="Saturday"){
                                setColorState("dark");
                            }else if(date==="Sunday"){
                                setColorState("danger");
                            }
                        },[])
    let num = 1
    return (
        <div className="col-xl-3 col-md-6 mb-4">
            <div className={`card border-left-${colorState} shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-12">
                            <div className={`text-xs3 font-weight-bold text-${colorState} mb-1`}>
                                Deadline:  {date}</div>
                                    {assign.map((assignment:Assignment)=>
                                        <CardSwitch key={num++} assignment={assignment}/>
                                    )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
