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
                if(json.status){
                    let users = json.data.users
                    users.map(async (user:User) => {
                        let data:DarbyData = {
                            userID:user.id,
                            name: user.firstname + " " + user.lastname,
                        }
                        darbyDataArray.push(data)
                    })
                    setDarbyData(darbyDataArray)
                }
            })
        }
    }

    useEffect(() => {
        async_effect()
    }, [user])

    return (
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Darby Chart</h6>
            </div>
            <div className="card-body">
                {
                    darbyData
                    ? darbyData.map(data => {return <Darby key={data.userID} data={data}/>})
                    : <div className="spinner-border text-primary" role="status"></div>
                }
            </div>
        </div>
    )
}

export default DarbyChart
