import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './tabs/Home'
import NavBar from './tabs/NavBar'
import { HashRouter as Router, Route,Routes,Link } from 'react-router'
import Skills from './tabs/Skills'
import Experience from './tabs/Experience'
import Contact from './tabs/Contact'
import Projects from './tabs/Projects'
import About from './tabs/About'

import ContextUserProvider from './tabs/ContextUserProvider'

function App() {
 

  return (
    <>
      
        <Router>

            <NavBar/>
              <ContextUserProvider>
              <Routes>
                    <Route path="/"  element={<Home/>}></Route>
                    <Route path="/skills" element={<Skills/>}></Route>
                    <Route path='/experience' element={<Experience/>}></Route>
                    <Route path='/projects' element={<Projects/>}></Route>
                    
                    <Route path='/About' element={<About/>}></Route>
              </Routes>
              </ContextUserProvider>
        </Router>
        
        
    </>
  )
}

export default App
