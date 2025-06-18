import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import InvoicePage from './pages/InvoicePage'
import ProtectedRoute from './routes/ProtectedRoute'
import ErrorPage from './pages/ErrorPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<ProtectedRoute>
        <InvoicePage/>
      </ProtectedRoute>} />
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/signup' element={<SignupPage/>}/>
      <Route path='/invoice' element={<ProtectedRoute>
        <InvoicePage/>
      </ProtectedRoute>} />
      <Route path='*' element={<ErrorPage/>}/>
    </Routes>
  )
}

export default App