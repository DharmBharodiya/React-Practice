import React, { useContext } from 'react'
import { ThemeContext, ThemeProvider } from './contexts/ThemeContext'
import Header from './components/Header'
import ThemeToggle from './components/ThemeToggle'
import './styles.css';

function AppContent() {
  const {themeType} = useContext(ThemeContext)
  
  return (
    <div className={`app ${themeType}`}>
      <Header/>
      <ThemeToggle/>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App