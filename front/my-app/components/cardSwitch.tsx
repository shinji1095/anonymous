import { FC } from 'react'
import YaruyoButton from './yaruyoButton'
import OwataButton from './owataButton'

export const CardSwitch: FC<{assignment:any}> 
                    = ({assignment}) =>{
    return (
            <div>
                <div className="h5 xs-0 font-weight-bold text-gray-800">
                    {assignment}
                </div>
                <div className="row justify-content-around">
                    <button type="button" className="btn-sm btn-success text-white">
                        <YaruyoButton assName={assignment}/>
                    </button>
                    <button type="button" className="btn-sm btn-danger text-white">
                        <OwataButton assName={assignment}/>
                    </button>
                </div>
            </div>
    )
}


export default CardSwitch