import React, { useContext } from 'react'
import { ThemeContext, ThemeProvider } from './contexts/ThemeContext'
import Header from './components/Header'
import ThemeToggle from './components/ThemeToggle'
import './styles.css';
import LanguageHeader from './components/LanguageHeader';
import LanguageSelector from './components/LanguageSelector';
import { LanguageProvider } from './contexts/LanguageContext';

function AppContent() {
  const {themeType} = useContext(ThemeContext)
  
  return (
    <div className={`app ${themeType}`}>
      <Header/>
      <ThemeToggle/>
      <LanguageHeader/>
      <LanguageSelector />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App