import { Link, useLocation } from "react-router"


function NavBar(){

  const location=useLocation();

  const getClassName=(path)=>{

      return location.pathname===path? " rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white":" rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"  

  }

  // u were able to achieve different theme with different page but did not implement cause they were looking odd...


    return (
        <>
            <nav className="bg-gray-800 min-w-280  rounded-lg m-1">
  <div class="  px-2 sm:px-6 lg:px-8">
    <div class="relative flex h-16 items-center justify-between">
      
      <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
        
        <div class=" sm:ml-6 sm:block">
          <div class="flex space-x-4 ">
            
            <Link to="/"  className={getClassName('/')}   >Home</Link>
            <Link to="/experience" className={getClassName('/experience')}>Experience</Link>
            <Link to="/projects" className={getClassName('/projects')}>Projects</Link>
            <Link to="/skills" className={getClassName('/skills')}>Skills</Link>
            
            <Link to="/About" className={getClassName('/About')}>About Me</Link>
            
          </div>
        </div>
      </div>
     
    </div>
  </div>

  
  
</nav>
        </>
    )

}

export default NavBar