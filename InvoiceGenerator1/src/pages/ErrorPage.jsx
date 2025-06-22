import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div className='error-container'>
      <h2>Error 404. Page not found.</h2>
      <button><Link to="/login">Home</Link></button>
    </div>
  )
}

export default ErrorPage