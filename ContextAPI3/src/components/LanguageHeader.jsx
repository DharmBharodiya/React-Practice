import React, {useContext} from 'react'
import { LanguageContext } from '../contexts/LanguageContext'

function LanguageHeader() {
    const {t} = useContext(LanguageContext)

  return (
    <header>
        <h1>{t.header}</h1>
        <p>{t.greeting}</p>
        <p>{t.description}</p>
    </header>
  )
}

export default LanguageHeader