import { useState } from "react"


function About(){

    const [edu,setEdu]=useState("Education")
    const [vis,setVis]=useState(false)
    const [hobbies,setHobbies]=useState("Hobbies")
    const [vishob,setVishob]=useState(false)
    const [contact,setContact]=useState("Contact")
    const [viscontact,setViscontact]=useState(false)
    const [achi,setAchi]=useState(false)
    const [achidis,setAchidis]=useState("Achievements")

    const showAchi=()=>{
        if(achi===false)
        {
            setAchi(true)
            setAchidis("Close")
        }
        else{
            setAchi(false)
            setAchidis("Achievements")
        }
    }

    const educationVisible =()=>{
        if(vis===false)
        {
            setVis(true)
            setEdu("Close")
        }
        else{
            setVis(false)
            setEdu("Education")
        }
    }

    const hobbiesVissible=()=>{

        if(vishob===false)
        {
            setVishob(true)
            setHobbies("Close")
        }
        else{
            setVishob(false)
            setHobbies("Hobbies")
        }

    }

    const contactVisible=()=>{
        if(viscontact===false)
        {
            setViscontact(true)
            setContact("Close")
        }
        else{
            setViscontact(false)
            setContact("Contact")
        }
    }


/**
 * <div className="h-auto w-full  p-1">
                                    
                                    <p class="text-lg font-medium text-white ">Education : <span className="font-bold ">Rajiv Gandhi Institute of Technology (Mumbai University)</span>  </p>
                                    <p className=" text-gray-400 ml-24 ">BE Mechanical Engineering</p>
                                    <p className=" text-gray-400 ml-24 "> CGPA : <span className="font-bold">8.63</span> (2019-23)</p>
                                    <p class="text-lg font-medium text-white ml-24 ">SVKM's Mithibai Junior College (HSC 2018-19)</p>
                                    <p className=" text-gray-400 ml-24 ">Percentage : <span className="font-bold">81.69% </span> (Science Stream) (Maths 97/100)</p>
                                    <p className=" text-gray-400 ml-24 ">Secured 729th state rank in MHT-CET general category, also secured 89 percentile in JEE Entrance exam.</p>
                                    <p class="text-lg font-medium text-white ml-24 ">St. Francis Xavier's High School (SSC 2016-17)</p>
                                    <p className=" text-gray-400 ml-24 ">Percentage : <span className="font-bold">88.6% </span> (Maths 97/100) </p>
                                </div>
 * 
 * 
 */


    return (
        <>
             <div className="flex min-h-140 min-w-280  text-white m-10 mr-15 ml-15 p-5  bg-[#181c2c] rounded-xl  shadow-[15px_15px_20px_rgba(0,0,0,10)]">
                            <div class="min-w-100 p-5   m-2 bg-[url('./Images/Aditya_Guptacsm.jpeg')] bg-cover bg-center  grid grid-cols-1  rounded-lg shadow-[2px_2px_10px_rgb(0,0,0,10)]   justify-center">
                                
                                
                            </div>
                            <div className="flex flex-grow grid p-3 grid-cols-1  rounded-xl items-center justify-center ">
                                
                                <h1 class="mb-3 text-6xl font-sans text-white  "><span class="text-blue-600 font-sans ">Hello</span>, I am <span className="italic"> Aditya</span>.</h1>
                                
                                <p class="text-2xl text-red-400 italic text-center m-1 animate-pulse  font-sans ml-20 custom-pulse">I’m a Software Developer by profession, but when I’m not coding, you’ll find me diving into books, especially fictional thrillers. I enjoy getting lost in a good story, though I do appreciate the occasional self-help read. I thrive on challenges, seeing them as opportunities to grow, learn, and push my limits...</p>
                                {vis && 
                                    <div className="h-auto w-full  p-1">
                                    
                                    <p class="text-lg font-medium text-white ">Education : <span className="font-bold ">Rajiv Gandhi Institute of Technology (Mumbai University)</span>  </p>
                                    <p className=" text-gray-400 ml-24 ">BE Mechanical Engineering</p>
                                    <p className=" text-gray-400 ml-24 "> CGPA : <span className="font-bold">8.80</span> (2019-23)</p>
                                    <p class="text-lg font-medium text-white ml-24 ">SVKM's Mithibai Junior College (HSC 2018-19)</p>
                                    <p className=" text-gray-400 ml-24 ">Percentage : <span className="font-bold">81.69% </span> (Science Stream) (Maths 97/100)</p>
                                    <p className=" text-gray-400 ml-24 ">Secured 729th state rank in MHT-CET general category, also secured 89 percentile in JEE Entrance exam.</p>
                                    <p class="text-lg font-medium text-white ml-24 ">St. Francis Xavier's High School (SSC 2016-17)</p>
                                    <p className=" text-gray-400 ml-24 ">Percentage : <span className="font-bold">88.40% </span> (Maths 97/100) </p>
                                    </div>
                                }
                                {achi && 
                                     <div className="h-auto w-full  p-1">
                                    
                                     <p class="text-lg font-medium text-white ">Achievements </p>
                                     <ul className="list-disc pl-5">
                                         <li className=" font-medium text-white ml-20 ">
                                             Secured 4th rank in both May and November 2021 marathon coding challenge by Prepbytes 
                                         </li>
                                         <li className=" font-medium text-white ml-20 ">
                                             Secured 3rd rank in January 2022 Prime Time coding challenge.
                                         </li>
                                         <li className=" font-medium text-white ml-20 ">
                                            HackerEarth Highest Rating : 1877, Codeforces HR: 1363.
                                         </li>
                                         
                                     </ul>
 
                                 </div>

                                }
                                {vishob && 
                                    <div className="h-auto w-full  p-1">
                                    
                                    <p class="text-lg font-medium text-white ">Hobbies </p>
                                    <ul className="list-disc pl-5">
                                        <li className=" font-medium text-white ml-20 ">
                                            I love reading books in my free time. Some of my favorite books are "The Last Lecture" and "For one More Day". Favorite author : Sidney Sheldon (Tell me your daydreams). 
                                        </li>
                                        <li className=" font-medium text-white ml-20 ">
                                            I even love playing Guitar.
                                        </li>
                                    </ul>

                                </div>
                                }
                               

                                <div className="h-auto w-full  p-1">
                                    {
                                        viscontact && 
                                        <div>
                                            <p class="text-lg font-medium text-white ">Contact <span className="ml-5">: adityaofficial3105@gmail.com 📨</span> {" | "} +91 9833698712 📞 {" | "}aadi_lost_in_books 📸 </p>
                                            <a href="https://www.linkedin.com/in/aditya-gupta-1b397a1b9/" className="inline-flex mb-5 ml-24 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                LinkedIn
                                                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                                </svg>
                                            </a>
                                            </div>

                                    }

                                    
                                            <button type="button" onClick={()=>{educationVisible()}} class="ml-15 text-white bg-blue-700 cursor-pointer hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            {edu}
                                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                            </svg>
                                            </button>
                                            <button type="button" onClick={()=>{showAchi()}} class="ml-5 text-white bg-orange-400 cursor-pointer hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            {achidis}
                                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                            </svg>
                                            </button>
                                            <button type="button" onClick={()=>{hobbiesVissible()}} class="ml-5 text-white bg-green-400 cursor-pointer hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            {hobbies}
                                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                            </svg>
                                            </button>
                                            <button type="button" onClick={()=>{contactVisible()}} class="ml-5 text-white bg-red-400 cursor-pointer hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            {contact} 
                                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                            </svg>
                                            </button>
                                    
                                </div>

                            </div>
                
             </div>
        </>
    )

}

export default About

