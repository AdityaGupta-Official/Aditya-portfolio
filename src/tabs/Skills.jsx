import { useEffect, useState } from "react"

import ContextUser from "./ContextUser"
import { useContext } from "react"

function Skills(){

    const {rating,setRating,badge,setBadge,username,setUsername,avt,setAvt,gitUserName,setGitUserName,repocount,setRepocount,followerCount,setFollowerCount,gitAvt,setGitAvt}=useContext(ContextUser)
        console.log(avt)

    return (
        <>
            <div className="grid grid-cols-3 p-8 min-w-330 bg-[#181c2c] items-center justify-center rounded-xl m-5 shadow-[15px_15px_20px_rgba(0,0,0,10)]">
                    <div className="col-span-1">
                        <div className="grid grid-cols-1 items-center justify-center">
                            <div class=" p-5   m-2 bg-[#181c2c]  grid grid-cols-2  rounded-lg    justify-center">
                                
                                <div className={`m-4 ml-8 mr-8 rounded-xl  bg-cover bg-center`}>
                                    <img src={"https://assets.leetcode.com/users/adtyaofficial17/avatar_1620033526.png"} alt="" className="w-full h-full rounded-xl" />
                                </div>

                                <div class="p-5">
                                    
                                
                                        
                                        <p class="text-lg font-medium text-white inline-block mr-1">LeetCode</p>
                                        {<div  className="h-5 w-6 bg-[url('./Images/LeetCode.png')] bg-cover bg-center inline-block"></div>
                                        }
                                        

                                        <h5 class="mb-2 text-1xl font-bold text-gray-900 text-white">{"AdityaGupta-Official"}</h5>
                                    
                                   
                                    <br />
                                    <a href="https://leetcode.com/u/AdityaGupta-Official/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Visit Profile
                                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div class="w-120 p-5   m-2 bg-[#181c2c]  grid grid-cols-2  rounded-lg    justify-center">
                                
                                <div className={`m-4 ml-8 mr-8 rounded-xl  bg-cover bg-center`}>
                                    <img src={gitAvt} alt="" className="w-full h-full rounded-xl" />
                                </div>

                                <div class="p-5">
                                    
                                
                                        
                                        <p class="text-lg font-medium text-white inline-block mr-1">GitHub</p>
                                        {<div  className="h-6 w-8 bg-[url('./Images/Github.png')] bg-cover bg-center inline-block"></div>
                                        }
                                        

                                        <h5 class="mb-2 text-1xl font-bold text-gray-900 text-white">{gitUserName}</h5>
                                    
                                    <p className="text-white">Public Repos : {repocount}</p>
                                    <p className="text-white">Followers : {followerCount}</p>
                                    <br />
                                    <a href="https://github.com/AdityaGupta-Official" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Visit Profile
                                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>

                    </div>
                    </div>
                    <div className="col-span-2">
                        <div class=" p-4   bg-[#181c2c] text-center rounded-lg  ">
                           <h3 className="text-white text-xl m-3">I have experience with these technologies.</h3>
                           <div class="grid grid-cols-4 gap-4  ">
                                <div class="h-30  bg-[url('./Images/react_l.png')] bg-contain bg-center bg-no-repeat rounded-md"></div>
                                <div class="h-30  bg-[url('./Images/nodejslog.png')] bg-contain bg-center bg-no-repeat  rounded-md"></div>
                                <div class="h-30  bg-[url('./Images/mydog.png')] bg-contain bg-center bg-no-repeat  rounded-md"></div>
                                <div class="h-30  bg-[url('./Images/mongodblo.png')] bg-contain bg-center bg-no-repeat  rounded-md"></div>
                                
                                <div class="h-30  bg-[url('./Images/html_log.png')] bg-contain bg-center bg-no-repeat  rounded-md"></div>
                                
                                <div class="h-30  bg-[url('./Images/css_log.png')] bg-contain bg-center bg-no-repeat  rounded-md"></div>
                                
                                <div class="h-30  bg-[url('./Images/js_log.png')] bg-contain bg-center bg-no-repeat  rounded-md"></div>
                                <div class="h-30  bg-[url('./Images/tail_logo.png')] bg-contain bg-center bg-no-repeat  rounded-md"></div>
                                <div class="h-30  bg-[url('./Images/c_log.png')] bg-contain bg-center bg-no-repeat  rounded-md"></div>
                                <div class="h-30  bg-[url('./Images/javalogo.png')] bg-contain bg-center bg-no-repeat  rounded-md"></div>
                                
                                <div className="h-30  bg-[url('./Images/pythong.png')] bg-contain bg-center bg-no-repeat  rounded-md"></div>
                            </div>               
                        </div>

                    </div>

                        

            </div>
        </>
    )

}
export default Skills