import React, {useState} from "react";
import {useAuth} from "../context/UserContext"
import { useNavigate } from "react-router-dom";

function SignupPage(){

    const {signup} = useAuth();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const navigate = useNavigate()

    const handleSignup = (e) => {
        e.preventDefault()
        const validate = signup(email, password)
        if(validate){
            setSuccess("Account registered. Login Now.");
            setTimeout(() => {
                navigate("/login")
            }, 1500)
        }else{
            setError("Error occured. Try again.")
        }
    }

    return(
        <div>
            <form onSubmit={handleSignup}>
                <input
                type="email"
                placeholder="E-mail"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                />
                <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                />
                {error ? <p className="error">{error}</p> : <p className="success">{success}</p>}
                <button type="submit">Sign up</button>
            </form>
        </div>
    )
}

export default SignupPage;