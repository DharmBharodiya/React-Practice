import React from 'react'
import {Navigate, useNavigate} from 'react-router-dom'
import {useAuth} from "../context/UserContext"

function ProtectedRoute({children}) {
  
  const {currentUser} = useAuth()

  return (
    currentUser ? children : <Navigate to="/login" replace/>
  )
}

export default ProtectedRoute