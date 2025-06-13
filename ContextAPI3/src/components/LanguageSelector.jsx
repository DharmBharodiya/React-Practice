import React, {useContext} from 'react'
import { LanguageContext } from '../contexts/LanguageContext'

function LanguageSelector() {
  
    const {language, switchLanguage} = useContext(LanguageContext)
  
  return (
    <div>
        <label htmlFor="language-select">Choose language: </label>
        <select name="language-select" id="language-select" value={language} onChange={(e) => switchLanguage(e.target.value)}>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
        </select>
    </div>
  )
}

export default LanguageSelector