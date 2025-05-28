import { useState } from "react"

function Projects(){

    const [robo,setRobo]=useState(false)
    const [robodes,setRobodes]=useState("Developed a mobile application to control a prototype robotic arm with four degrees of freedom (DOF). The mobile app enables precise...")
    const [abudes,setAbudes]=useState("Led the programming team of the RGIT Robotics Club in the international competition ABU Robocon 2021-22. The theme for the competition was Lagori, which...")
    const [abuvis,setAbuvis]=useState(false)
    const [gitp,setGitp]=useState(false)
    const [gtipdes,setGitpdes]=useState("Developed a dynamic website that allows users to retrieve comprehensive details related to a GitHub user by simply entering their GitHub username...")
    const [portf,setPortf]=useState(false)
    const [portdes,setPortdes]=useState("Developed a personal portfolio website using React to provide a comprehensive introduction to potential recruiters. Implemented key React concepts and libraries, including Context API...")

    const roboShow=()=>{
        if(robo===false)
        {
            setRobo(true)
            setRobodes("Developed a mobile application to control a prototype robotic arm with four degrees of freedom (DOF). The mobile app enables precise control of the robotic arm's movements, leveraging an ESP-32 microcontroller for motion management and monitoring. A client-server architecture was implemented to facilitate communication between the mobile application and the ESP-32, with the microcontroller functioning as the server.")
        }
        else{
            setRobo(false)
            setRobodes("Developed a mobile application to control a prototype robotic arm with four degrees of freedom (DOF). The mobile app enables precise...")
        }
    }

    const abuShow = ()=>{
        if(abuvis===false)
        {
            setAbuvis(true)
            setAbudes("Led the programming team of the RGIT Robotics Club in the international competition ABU Robocon 2021-22. The theme for the competition was Lagori, which involved the use of two robots. Utilized Arduino Mega to control the motion of both robots and to receive commands from a PS4 controller. Successfully programmed both robots, along with my team, to execute the required tasks and meet competition objectives.")
        }
        else{
            setAbuvis(false)
            setAbudes("Led the programming team of the RGIT Robotics Club in the international competition ABU Robocon 2021-22. The theme for the competition was Lagori, which...")
        }
    }

    const gitShow=()=>{
        if(gitp===false)
        {
            setGitp(true)
            setGitpdes("Developed a dynamic website that allows users to retrieve comprehensive details related to a GitHub user by simply entering their GitHub username. The website was built using HTML, CSS, and JavaScript, leveraging GitHub's public API to fetch and display user data in real-time. Implemented an intuitive and responsive interface to enhance user experience, providing details such as repositories, contributions, and profile information. Ensured the website is fully responsive across all screen sizes, offering an optimal viewing experience on desktops, tablets, and mobile devices.")
        }
        else{
            setGitp(false)
            setGitpdes("Developed a dynamic website that allows users to retrieve comprehensive details related to a GitHub user by simply entering their GitHub username...")
        }
    }

    const portShow=()=>{
        if(portf===false)
        {
            setPortf(true)
            setPortdes("Developed a personal portfolio website using React to provide a comprehensive introduction to potential recruiters. Implemented key React concepts and libraries, including Context API and React Router, to enhance functionality and navigation. Integrated LeetCode and GitHub APIs to fetch and display real-time data, showcasing coding achievements and project contributions. Designed the website with multiple sections, including Home, Experience, Projects, and more, each displaying relevant and organized information for a seamless user experience.")
        }
        else{
            setPortf(false)
            setPortdes("Developed a personal portfolio website using React to provide a comprehensive introduction to potential recruiters. Implemented key React concepts and libraries, including Context API...")
        }
    }

    return (
        <>
          <div className="flex min-h-130 min-w-240  text-white m-5 p-4  bg-[#181c2c] rounded-xl  shadow-[15px_15px_20px_rgba(0,0,20,10)]">
                <div className="w-full m-4 grid grid-cols-1 ">

                    <div className={`grid grid-cols-3 `}>
                        <div className={`p-4 m-1 bg-[#0e142e]  rounded-xl shadow-[15px_15px_20px_rgba(0,0,0,10)]`}>
                            <h6 class="text-lg font-bold  ">Robotic-Arm Controller App</h6>
                        
                            <h6 class="text-lg text-gray-400">Programming Team Head (RGIT Robotic's Club)</h6>
                            <p className="text-gray-500">{robodes}</p>
                            <button type="button" onClick={()=>{roboShow()}} className={`text-white cursor-pointer m-1 mt-3 ${robo?"bg-green-400 hover:bg-green-500":"bg-blue-700 hover:bg-blue-800"}  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>
                                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                                <span class="sr-only">Icon description</span>
                            </button>
                        </div>
                        <div className="  p-4 m-1 bg-[#0e142e]  rounded-xl shadow-[15px_15px_20px_rgba(0,0,0,10)] ">
                            <h6 class="text-lg font-bold  ">ABU Robocon 2021-22</h6>
                        
                            <h6 class="text-lg text-gray-400">Programming Team Head (RGIT Robotic's Club)</h6>
                            <p className="text-gray-500">{abudes} </p>
                            <button type="button" onClick={()=>{abuShow()}} className={`text-white cursor-pointer m-1 mt-3 ${abuvis?"bg-green-400 hover:bg-green-500":"bg-blue-700 hover:bg-blue-800"}  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>
                                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                                <span class="sr-only">Icon description</span>
                            </button>
                        </div>
                        <div className="  p-4 m-1 bg-[#0e142e]  rounded-xl shadow-[15px_15px_20px_rgba(0,0,0,10)] ">
                            <h6 class="text-lg font-bold  ">GitHub Account Locator</h6>
                        
                            
                            <p className={`text-gray-500`}>{gtipdes}</p>
                            <button type="button" onClick={()=>{gitShow()}} className={`text-white cursor-pointer m-1 mt-3 ${gitp?"bg-green-400 hover:bg-green-500":"bg-blue-700 hover:bg-blue-800"}  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>
                                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                                <span class="sr-only">Icon description</span>
                            </button>
                        </div>
                        
                    </div>                  
                    <div className="flex w-full   grid grid-cols-3 ">
                    <div className="  p-4 m-1 bg-[#0e142e]  rounded-xl shadow-[15px_15px_20px_rgba(0,0,0,10)] ">
                            <h6 class="text-lg font-bold  ">Portfolio (using React)</h6>
                        
                            
                            <p className="text-gray-500">{portdes}</p>
                            <button type="button" onClick={()=>{portShow()}} className={`text-white cursor-pointer m-1 mt-3 ${portf?"bg-green-400 hover:bg-green-500":"bg-blue-700 hover:bg-blue-800"}  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>
                                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                                <span class="sr-only">Icon description</span>
                            </button>
                        </div>
                        
                       
                        
                    </div>      

                </div>
                
           </div>
        </>
    )

}

export default Projects