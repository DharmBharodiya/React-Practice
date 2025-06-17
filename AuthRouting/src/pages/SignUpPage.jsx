import React from 'react'
import { useAuth } from '../context/UserContextProvider'
import { useState } from 'react';
import  {useNavigate} from 'react-router-dom'

function SignUpPage() {
    const {signup} = useAuth();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleSignup = (e) => {
        e.preventDefault()
        if (!email || !password) {
            setError('Please fill in all fields');
            return;
        }
        const success = signup(email, password)
        if(success){
            navigate("/login")
        }else{
            setError("Email already exists")
        }
    }
    
  return (
    <div>
        <form onSubmit={handleSignup}>
            <input type="email" 
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            name='email'
            placeholder='Email'
            required
            />
            <input type="password" 
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder='Password'
            required
            minLength="6"
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type='submit'>Sign Up</button>
        </form>
    </div>
  )
}

export default SignUpPage