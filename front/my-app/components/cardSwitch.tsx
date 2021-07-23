import { FC } from 'react'
import YaruyoButton from './yaruyoButton'
import OwataButton from './owataButton'

export const CardSwitch: FC<{assignment:any}> 
                    = ({assignment}) =>{
    return (
            // <div className="h5 mb-0 font-weight-bold text-gray-800">
            <div className="h5 xs-4">
                <div className="container">
                    <div className="row">
                        {/* <div className=" col-xs-2 text-xs font-weight-bold text-primary text-uppercase mb-1"> */}
                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                            {assignment}
                        </div>
                        <div className="col-xs-3">
                            <button type="button" className="btn btn-success text-white">
                                <YaruyoButton assName={assignment}/>
                            </button>
                        </div>
                        <div className="col-xs-3">
                            <button type="button" className="btn btn-danger text-white">
                                <OwataButton assName={assignment}/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    )
}


export default CardSwitch