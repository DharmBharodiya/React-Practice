import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

function Layout({isLoggedIn, setIsLoggedIn}) {
    
    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-gray-800 p-4">
                <ul className="flex space-x-6 justify-center">
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
                            onClick={() => setIsLoggedIn(false)}
                            className="text-white hover:underline">
                                LogOut
                            </button>
                        </li>
                    )}   
                </ul>
            </nav>
            <div className="container mx-auto p-4">
                <Outlet />
            </div>
        </div>
  )
}

export default Layout