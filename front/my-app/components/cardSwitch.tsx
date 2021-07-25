import { FC } from 'react'
import YaruyoButton from './yaruyoButton'
import OwataButton from './owataButton'
import Assignment from '../type/assignment'

export const CardSwitch: FC<{assignment:Assignment}> 
                    = ({assignment}) =>{
    return (
            <div className="mt-1">
                <div className="h5 xs-0 font-weight-bold text-gray-800">
                    {assignment.name}
                </div>
                <div className="row justify-content-center">
                    <button type="button" className="mr-2 btn-sm btn-success text-white">
                        <YaruyoButton assignment={assignment}/>
                    </button>
                    <button type="button" className="btn-sm btn-danger text-white ml-2">
                        <OwataButton assignment={assignment}/>
                    </button>
                </div>
            </div>
    )
}


export default CardSwitch