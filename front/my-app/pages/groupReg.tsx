import React from 'react'
import Layout from '../common/layout'
import { useState } from 'react'
import { useCallback } from 'react'
import { useUser } from '../hooks/useUser'
import {useRouter} from "next/router"

interface AssData {
    name: string
    due: string
    groupID: number
}

const initAss: AssData = {name: "", due: "", groupID:0}

const Groupreg = () => {
    const [groupName, setGroupName] = useState<string>("")
    const [assData, setAssData] = useState<AssData>(initAss)
    const {user, loading} = useUser()
    const router = useRouter()

    const handleChangeGroupName = (e:React.ChangeEvent<HTMLInputElement>) => setGroupName(e.target.value)
    const handleCahngeAssDataFunc = (name:string) => {
        const hadleChaneAssData = (e:React.ChangeEvent<HTMLInputElement>) => {
            switch (name){
                case "name":
                    setAssData({...assData, name:e.target.value})
                    break
                case "due":
                    setAssData({...assData, due: e.target.value})
                    break
            }
        }
        return hadleChaneAssData
    }

    const fetch_await = async (url: string, config: any) => {
        let res = await fetch(url, config)
        let json = await res.json()
        return json
    }

    const handleClick = useCallback(() => {
        const url_g = "/api/group"
        const url_a = "/api/assignment"

        let config = (data:any) => {
            return {
            method: "POST",
            headers:{
                'Accept': 'application/json',
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }}

        fetch_await(url_g, config({name:groupName}))
        .then(data => {
            if (data.status){
                let groupID = data.data.id
                fetch_await(url_a, config({...assData, groupID}))
                .then(d => {
                    console.log(user)
                    console.log({...user, groupID})
                    sessionStorage.setItem("user", JSON.stringify({...user, groupID}))
                    router.push("/app")
                })
                .catch(err => console.log(err))
            }
        })
        .catch(err => console.log(err))
        
    }, [groupName, assData, user])

    return (
        <Layout>
        <div className="container">
            <div className="text-center">
                <h2>Let&apos;s make a group!</h2>
                <p className="lead">
                    If you make a group, you can share your weekly assginment, motivate each other, get notices which your gourp member start to do assignment. You can share the motivation against weekly assignment through this app. Before starting to use this, Let&apos;s make a group and register the weekly assignment!
                </p>
            </div>
            <hr />
            <div className="row">
                <div className="col-lg-6 md-4">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Group Name</label>
                        <input type="text" onChange={handleChangeGroupName} className="form-control" id="exampleFormControlInput1" placeholder="ひびきの！"/>
                    </div>
                </div> 
                <div className="col-lg-6 md-4">
                    <div className="card">
                        <div className="card-header">
                            Assignment
                        </div>
                        <div className="card-body">
                            <div>
                                <div className="mb-3 row">
                                    <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                                    <div className="col-sm-10">
                                    <input type="text" onChange={handleCahngeAssDataFunc("name")} className="form-control-plaintext border" id="name" placeholder="  name"/>
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="due" className="col-sm-2 col-form-label">Due</label>
                                    <div className="col-sm-10">
                                        <input type="text" onChange={handleCahngeAssDataFunc("due")} className="form-control-plaintext border" id="due" placeholder="   due"/>
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <button onClick={handleClick} className="btn btn-primary">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Layout>
    )
}

export default Groupreg
