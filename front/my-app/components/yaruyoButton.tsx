import { 
    FC,
    useCallback,
    useEffect,
    } from 'react'

import { useLiff } from '../hooks/useLiff'
import { useUser } from '../hooks/useUser'
import Assignment from '../type/assignment'

const YaruyoButton:FC<{assignment:Assignment}> = ({assignment}) => {
    const { liff } = useLiff()
    const {user, loading} = useUser()
    const status = 1

    let pushShareTargetPicker = useCallback(() =>{
        if(liff)
            liff.init({ liffId:"1655688058-yvdQp0ko" }).then(() => {
                if (!liff.isLoggedIn()) {
                    liff.login()
                }
                liff.shareTargetPicker([{
                    'type': 'text',
                    'text': 'おれ'+ assignment.name +'やりはじめるけどお前は？'
                }])
                .catch((err: Error) =>
                alert(err)
                )

            })
        if (user){
            const config = {
                method: "PUT",
            }
            let url = "/api/do?userID=" + user.id + "&assignmentID=" + assignment.id + "&status=" + status
            fetch(url,config)
            .then(res => res.json())
            .then(json => {
                console.log(json)
            })
        }
    }, [liff, user])
    return (
        <span className="mr-2 d-none d-lg-inline text-white font-weight-bold small "
            onClick={pushShareTargetPicker}>やるよ宣言
        </span>
        
    )
}

export default YaruyoButton
