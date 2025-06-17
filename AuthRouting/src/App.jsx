import React from 'react'
import {Routes, Route} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import Home from './pages/Home'
import About from './pages/About'
import ProtectedRoute from './routes/ProtectedRoute'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/signup" element={<SignUpPage/>}/>
      <Route path="/home" element={
        <ProtectedRoute>
          <Home/>
        </ProtectedRoute>}
      />
      <Route path="/about" element={
        <ProtectedRoute>
          <About />
        </ProtectedRoute>
      } />
    </Routes>    
  )
}

export default App