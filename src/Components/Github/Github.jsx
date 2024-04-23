import React from 'react'
import { useLoaderData } from 'react-router-dom'

import { useState } from "react"
import { useEffect } from "react"

function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState()
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/Nischay2123")
    //     .then(Response=>Response.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data)
    //     })
        
    // },[])
    return (
        <div className=" text-white text-3xl bg-gray-600 text-center m-4 p-4" >
            Github Followers: {data.followers}
            <img src={data.avatar_url} alt="git picture"  width={300}/>
            </div>
    )
}

export default Github

export const getInfoGithubLoader = async()=>{
    const response = await fetch("https://api.github.com/users/Nischay2123")
    return response.json()
}
