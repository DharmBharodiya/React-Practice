import React, {useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import { useAuth } from '../context/AuthContext';
import './SignUpPage.css';

const SignUpPage = () => {
    
    const navigate = useNavigate();
    const {signup} = useAuth();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    const handleSignUp = (e) => {
        e.preventDefault();

        const test = signup(email, password);

        if(test){
            setSuccess("Successfully Registered. Login Now.")
            setTimeout(() => navigate("/login"), 1500)
        }else{
            setError("User already exists.")
        }
    }

    return(
        <div className='signup-container'>
            <form onSubmit={handleSignUp}>
                <label>Email:</label>
                <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
                <label>Password:</label>
                <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                />

                {error ? <p className='error'>{error}</p> : <p className='success'>{success}</p>}

                <button type='submit'>Sign up</button>
            </form>
        </div>
    )
}

export default SignUpPage;