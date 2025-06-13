import React, {useContext} from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

function Header() {
 
    const {themeType} = useContext(ThemeContext)
    
    return (
    <header>
        <h1>My Theme App : Using Context API</h1>
        <p>Current Theme: {themeType}</p>    
    </header>
  )
}

export default Header