import { 
    useEffect,
    useState
 } from "react"

 import { useUser } from "../hooks/useUser"
 import Member from "./member"
 import Group from "../type/group"
 import User from "../type/user"

const MemberAll = () => {
    const {user, loading} = useUser()
    const [users, setUsers] = useState<User[]>()
    useEffect(() => {
        if(user){
            let url = "/api/group/" + user.groupID
            fetch(url)
            .then(res => res.json())
            .then((data) => {
                let group: Group = data.data
                console.log(group.users)
                setUsers(group.users)
            })

        }
    }, [user])
    let num = 0
    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Member</h6>
                </div>
                <div className="card-body">
                <div className="row justify-content-between">
                    {
                        users
                        ? users.map(user => {return <Member key={num++} num={num++} user={user}/>})
                        : <div className="spinner-border text-secondary" role="status"/>
                    }
                </div>
            </div>
        </div>
    </div>
    )
}

export default MemberAll
