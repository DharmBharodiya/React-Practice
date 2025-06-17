import React from 'react'
import { useAuth } from '../context/UserContextProvider'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function LoginPage() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleLogin = (e) => {
        e.preventDefault()
        const success = login(email, password)
        if(success){
            navigate("/home")
        } else {
            setError("Invalid email or password")
        }
    }
    
    return (
        <div>
            <form onSubmit={handleLogin}>
                <input 
                    type="email" 
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    name='email'
                    placeholder='email'
                    required
                />
                <input 
                    type="password" 
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder='password'
                    required
                />
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type='submit'>Log In</button>
            </form>
        </div>
    )
}

export default LoginPage