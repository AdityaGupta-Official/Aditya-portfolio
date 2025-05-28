
import ContextUser from "./ContextUser"

import { useContext } from "react"

function Experience(){

    //

    


    return (
        <>
           <div className="flex min-h-130 min-w-260  text-white m-5 p-4  bg-[#181c2c] rounded-xl  shadow-[15px_15px_20px_rgba(0,0,0,10)]">
                <div className="w-full m-4 grid grid-cols-1 ">

                <div role="status" className=" flex flex-grow items-center">
                        <div class=" w-60 h-full bg-[url('./Images/TCS.png')] bg-cover bg-center  rounded-sm ">
                                
                        </div>
                        <div class="w-full m-2">
                            <div class="  rounded-full  ">
                            <h4 class="text-2xl font-bold text-white">Tata Consultancy Service</h4>
                            
                            <h6 class="text-lg font-bold text-white">System Engineer <span className="text-gray-400 text-sm">October 2023 - Present (Full-time)</span></h6>
                                <p className="text-White">LIMS Developer : </p>
                                        <ul className="list-disc pl-5 text-gray-400 ">
                                            <li className=" ">Developed platforms using LIMS software based on complex user requirements.</li>
                                            <li className=" ">Interacted with clients to identify feasible solutions tailored to their needs.</li>
                                            <li className=" ">Actively engaged with clients to address queries and assist them in understanding platform functionality.</li>
                                            <li className="">Led the development of platforms, including product configuration and unit testing.</li>
                                            <li className=" ">Managed defect resolution by providing appropriate solutions, along with the necessary justifications.</li>
                                        </ul>
                            </div>
                            
                            
                        </div>
                        
                    </div>
                    <hr class="w-48 h-2 mx-auto my-2 bg-gray-400 border-0 rounded-sm md:my-10 dark:bg-gray-700"></hr>
                        <div role="status" className=" flex flex-grow items-center">
                            <div class=" w-60 h-full bg-[url('./Images/vsmthane.png')] bg-cover bg-center  rounded-sm ">
                                    
                            </div>
                                <div class="w-full m-2">
                                        <div class="  rounded-full  mb-4">
                                        <h4 class="text-2xl font-bold text-white">Vidyadaan Sahayyak Mandal</h4>
                                        
                                        <h6 class="text-lg font-bold text-white">Backend Developer <span className="text-gray-400 text-sm">(Dec 2021 - Mar 2022) (Internship)</span></h6>
                                        <ul className="list-disc pl-5 ">
                                            <li className="text-gray-400 ">Developed and implemented a Donor Portal to manage donations and donor details for the NGO, streamlining the donation process and improving donor engagement.</li>
                                            <li className="text-gray-400 ">Designed and integrated authentication and authorization mechanisms to ensure secure access to sensitive donation data, preventing unauthorized access.</li>
                                            <li className="text-gray-400 ">Developed a set of RESTful APIs using Node.js to interact with a MySQL database, enabling efficient data retrieval based on user queries.</li>
                                            <li className="text-gray-400 ">Implemented CRUD operations (Create, Read, Update, Delete) through API endpoints, ensuring seamless data management for donors and donations.</li>
                                        </ul>
                                    
                                    </div>
                                
                                
                            </div>
                            
                        </div>
                                                
                            

                </div>
                
           </div>
        </>
    )

}

export default Experience