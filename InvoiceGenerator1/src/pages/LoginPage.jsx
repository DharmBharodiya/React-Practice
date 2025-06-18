import React, {useState} from "react";
import {useAuth} from "../context/UserContext"
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css"

function LoginPage(){
    const {login} = useAuth()
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleLogin = (e) => {
        e.preventDefault()
        const validate = login(email, password)

        if(validate){
            navigate("/invoice")
        }else{
            setError("Invalid credentials. Try again.")
        }
    }

    return(
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
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
                {error && <p>{error}</p>}
                <button type="submit">Log In</button>
                <p>New User? <Link to="/signup">Sign up</Link></p>
            </form>
        </div>
    )
}

export default LoginPage;