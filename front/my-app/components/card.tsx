import { FC } from 'react'
import CardSwitch from './cardSwitch'

export const Card: FC<{assign:any, date:any}> 
                    = ({assign, date}) =>{
    return (
        <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-primary shadow h-100 py-2">
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-12">
                            <div className="text-xs3 font-weight-bold text-primary text-uppercase mb-1">
                                Deadline:  {date}</div>
                                    {assign.map((data:any)=>
                                        <CardSwitch assignment={data}/>
                                    )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
