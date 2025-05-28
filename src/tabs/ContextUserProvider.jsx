import { useState } from "react"

import ContextUser from "./ContextUser"

const ContextUserProvider=({children})=>{
    
    
    const [rating,setRating]=useState(0)
    const [badge,setBadge]=useState(0)
    const [username,setUsername]=useState("")
    const [avt,setAvt]=useState("")
    const [gitUserName,setGitUserName]=useState("")
    const [repocount,setRepocount]=useState(0)
    const [followerCount,setFollowerCount]=useState(0)
    const [gitAvt,setGitAvt]=useState("")
    
    const [name,setName]=useState("")



    return (
        <ContextUser.Provider value={{rating,setRating,badge,setBadge,username,setUsername,avt,setAvt,gitUserName,setGitUserName,repocount,setRepocount,followerCount,setFollowerCount,gitAvt,setGitAvt}} >

       {children}
       </ContextUser.Provider>
    )

}

export default ContextUserProvider