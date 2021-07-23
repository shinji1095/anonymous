import { 
    useEffect,
    useState,
    } from "react"
import Darby from "./darby"
import { useUser } from "../hooks/useUser"

import User from "../type/user"
import DarbyData from "../type/darbyData"

export const DarbyChart = () => {
    const {user, loading} = useUser()
    const [darbyData, setDarbyData] = useState<DarbyData[] | null>()

    const async_effect = async () => {
        if(user){
            const url_group = "/api/group/" + user?.groupID
            await fetch(url_group)
            .then(data => data.json())
            .then(async (json) => {
                let darbyDataArray: DarbyData[] = []
                console.log(json)
                let users = json.data.users
                users.map(async (user:User) => {
                    let data:DarbyData = {
                        userID:user.id,
                        name: user.firstname + " " + user.lastname,
                    }
                    darbyDataArray.push(data)
                })
                setDarbyData(darbyDataArray)
            })
        }
    }

    useEffect(() => {
        async_effect()
    }, [user])

    return (
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
            </div>
            <div className="card-body">
                {
                    darbyData
                    ? darbyData.map(data => {return <Darby data={data}/>})
                    : <h2>hello</h2>
                }

                {/* <h4 className="small font-weight-bold">Server Migration <span
                        className="float-right">20%</span></h4>
                <div className="progress mb-4">
                    <div className="progress-bar bg-danger" role="progressbar" style={{"width": "20%"}}></div>
                </div>

                <h4 className="small font-weight-bold">Sales Tracking <span
                        className="float-right">40%</span></h4>
                <div className="progress mb-4">
                    <div className="progress-bar bg-warning" role="progressbar" style={{"width": "40%"}}></div>
                </div>
                <h4 className="small font-weight-bold">Customer Database <span
                        className="float-right">60%</span></h4>
                <div className="progress mb-4">
                    <div className="progress-bar" role="progressbar" style={{"width": "60%"}}></div>
                </div>
                <h4 className="small font-weight-bold">Payout Details <span
                        className="float-right">80%</span></h4>
                <div className="progress mb-4">
                    <div className="progress-bar bg-info" role="progressbar" style={{"width": "80%"}}></div>
                </div>
                <h4 className="small font-weight-bold">Account Setup <span
                        className="float-right">Complete!</span></h4>
                <div className="progress">
                    <div className="progress-bar bg-success" role="progressbar" style={{"width": "100%"}}></div>
                </div> */}
            </div>
        </div>
    )
}

export default DarbyChart
