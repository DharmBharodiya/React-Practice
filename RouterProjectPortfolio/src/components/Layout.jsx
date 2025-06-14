import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

function Layout({isLoggedIn, setIsLoggedIn}) {
    
    return (

        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink
                         to="/"
                         className={({isActive}) => 
                        isActive ? "text-white font-bold underline" : "text-white hover:underline"}
                         >Home</NavLink>
                    </li>
                    <li>
                        <NavLink
                          to="/about"
                          className={({isActive}) => 
                         isActive ? "text-white font-bold underline" : "text-white hover:underline"}
                          >About</NavLink>
                    </li>
                    <li>
                          <NavLink
                           to="/projects"
                           className={({isActive}) => 
                          isActive ? "text-white font-bold underline" : "text-white hover:underline"}
                           >Projects</NavLink>
                    </li>
                    <li>
                            <NavLink
                            to="/contact"
                            className={({isActive}) => 
                            isActive ? "text-white font-bold underline" : "text-white hover:underline"}
                            >Contact</NavLink>
                    </li>
                    {isLoggedIn && (
                        <li>
                            <button 
                            onClick={() => setIsLoggedIn(false)}>
                                LogOut
                            </button>
                        </li>
                    )}   
                    
                </ul>
            </nav>
            <div>
                <Outlet />
            </div>
            
        </div>

  )
}

export default Layout