
import { useContext, useEffect } from "react"
import ContextUser from "./ContextUser"

function Home(){

    //#181c2c
    //bg-[url('./Images/Aditya_gupta.jpeg')]
    //123, 181, 238

    const {rating,setRating,badge,setBadge,username,setUsername,avt,setAvt,gitUserName,setGitUserName,repocount,setRepocount,followerCount,setFollowerCount,gitAvt,setGitAvt}=useContext(ContextUser)

    const getName=()=>{
        try {
            
            fetch("https://alfa-leetcode-api.onrender.com/AdityaGupta-Official").then(res=>res.json()).then((res)=>{
                setUsername(res["username"])
                setAvt(res["avatar"])
                console.log(username)

                console.log(avt)
            }).catch(err=>{
                console.log(err)
            })

        } catch (error) {
            console.log(error)
        }
    }

    const getRating=()=>{

        try {
            
            fetch("https://alfa-leetcode-api.onrender.com/AdityaGupta-Official/contest").then(res=>res.json()).then((res)=>{
               setRating(parseInt(res["contestRating"]))

                console.log(avt)
            }).catch(err=>{
                console.log(err)
            })

        } catch (error) {
            console.log(error)
        }

    }
    const getBadge=()=>{
        try {
            
            fetch("https://alfa-leetcode-api.onrender.com/AdityaGupta-Official/badges").then(res=>res.json()).then((res)=>{
               setBadge(res["badgesCount"])

                console.log(avt)
            }).catch(err=>{
                console.log(err)
            })

        } catch (error) {
            console.log(error)
        }
    }

    const getGithub=()=>{

        try {
            
            fetch("https://api.github.com/users/AdityaGupta-Official").then(res=>res.json()).then((res)=>{
               setGitUserName(res["login"])
               setGitAvt(res["avatar_url"])
               setRepocount(res["public_repos"])
               setFollowerCount(res["followers"])
            }).catch(err=>{
                console.log(err)
            })

        } catch (error) {
            console.log(error)
        }

    }

    useEffect(()=>{

       getName()
       getBadge()
       getRating()
       getGithub()
       

    },[])

    //bg-[#181c2c]

    return(
        <>
            <div className="relative flex flex-grow bg-[#181c2c]   min-h-95 m-20 min-w-200  rounded-xl p-3 shadow-[15px_15px_20px_rgba(0,0,0,10)] ">
                   <div  className="absolute top-0 left-15 bottom-0 flex-none m-auto min-h-120 animate-pulse   min-w-80 bg-[url('./Images/Aditya_Guptacsm.jpeg')] mr-4 float-left bg-cover bg-center rounded-xl custom-pulse ">
                   
                   </div>

                   <div className=" ml-90 bottom-10 h-full p-8 flex-grow flex flex-col text-white items-center justify-center text-center ">
                       
                        <div className="">
                            <blockquote>
                                <p class="text-xl italic font-medium  text-gray-400 hover:text-white  ">"I am a Full-Stack Developer with over 3 years of experience in building scalable web applications using React.js, Node.js, and Express. Proficient in both frontend and backend development, I specialize in creating dynamic user interfaces with React while efficiently managing server-side logic and databases like MySQL and MongoDB."</p>
                            </blockquote>
                        </div>
                        <div className="m-5">
                                <h2 class="text-4xl font-bold dark:text-white">Aditya Gupta</h2>
                                <p>System Engineer @ TCS</p>
                                <p>adityaofficial3105@gmail.com {" | "} +91 98336-98712</p>
                                <br />
                                <p class="text-gray-500 italic hover:text-white">"It does not matter how slowly you go as long as you do not stop." - Confucius</p>
                        </div>
                        
                        

                   </div>
            </div>
            
           
        </>
    )

}

export default Home