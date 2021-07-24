import { 
    useEffect, 
    useState,
    useCallback,
    FC
} from 'react'
import Group from '../type/group'
import { useUser } from '../hooks/useUser'
import { useRouter } from 'next/router'


const GroupAll = () => {
    const {user, loading} = useUser()
    const router = useRouter()
    const Td:FC<{num:number, group:Group}> = ({num, group}) => {
        const handleClick = useCallback(() => {
            if(user){
                let url = "/api/user/" + user.id + "?groupID=" + group.id
                const config = {
                    method: "PUT"
                }
                fetch(url, config)
                .then(data => data.json())
                .then(json => {
                    console.log(json)
                    sessionStorage.setItem("user" ,JSON.stringify({...user, groupID:group.id}))
                    router.push("/main")
                })
            }
        }, [user])
        return (
                <tr>
                <th scope="row">{num}</th>
                <td onClick={handleClick}>{group.name}</td>
                <td>4</td>
                </tr>
        )
    }
    const [groups, setGroups] = useState<Group[] | null>()
    let num = 1
    useEffect(() => {
        const url = "/api/group"
        fetch(url)
        .then(data => data.json())
        .then(json => {
            console.log(json.data)
            setGroups(json.data)
        })
    },[])
    return (
        <div>
            <h5>Choose Group</h5>
            <table className="table">
            <thead className="thead">
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Amount</th>
                </tr>
            </thead>
            <tbody>
                {
                    groups
                    ? groups.map(group => {return <Td key={num++} num={num++} group={group}/>})
                    :<h2>hello</h2>
                }
            </tbody>
            </table>
        </div>
    )
}

export default GroupAll
