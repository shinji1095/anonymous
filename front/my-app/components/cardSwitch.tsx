import { FC } from 'react'

export const CardSwitch: FC<{assignment:any}> 
                    = ({assignment}) =>{
    return (
            <div className="h5 mb-0 font-weight-bold text-gray-800">
                {assignment}
                {/* <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Not start</label>
                </div>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Finished</label>
                </div> */}
            </div>
    )
}


export default CardSwitch