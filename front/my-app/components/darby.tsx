import {
    FC,
    useState,
    useLayoutEffect
} from 'react'
import DarbyData from '../type/darbyData'

const fetch_do = async (userID:number) => {
    const url_do_week = "/api/do/week/" + userID
    let data = await fetch(url_do_week)
    let json = await data.json()
    return json
}

const  Darby:FC<{data:DarbyData}> = ({data}) => {
    const [color, setColor] = useState<string>("")
    const [progress, setProgress] = useState<number>(0)
    useLayoutEffect(() => {
        fetch_do(data.userID)
        .then(dos => {
            let sum_status = 0
            let sum_dos = dos.data.length
            dos.data.map((d:any) => {
                switch (d.status){
                    case 2:
                        sum_status += 1
                        break
                    case 1:
                        sum_status += 0.5
                        break
                    case 0:
                        break
                }
            })
            let pro = 100 * sum_status / sum_dos
            setProgress(pro)
            let c = ""
            if (pro <= 20){
                c = "progress-bar bg-danger"
            }else if(pro <= 40){
                c = "progress-bar bg-warning"
            }else if(pro <= 60){
                c = "progress-bar"
            }else if (pro <= 80){
                c = "progress-bar bg-info"
            }else if (pro == 100){
                c = "progress-bar bg-success"
            }
            setColor(c)
        })
    }, [])
    return (
        <>
            <h4 className="small font-weight-bold" key={data.userID}>{data.name} <span
                        className="float-right">{progress}</span></h4>
            <div className="progress mb-4">
            <div className={color} role="progressbar" style={{"width": progress + "%"}}></div>
            </div>
        </>
    )
}

export default Darby
