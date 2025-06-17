import React, {useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import './LoginPage.css';

const LoginPage = () => {
    const {login} = useAuth()
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault()
        const success = login(email, password);

        if(success){
            navigate("/invoice")
        }else{
            setError("Invalid email or password")
        }
    }

    return(
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <label>Email:</label>
                <input
                type="email" 
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                />
                <label>Password:</label>
                <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                />

                {error && <p className="error">{error}</p>}

                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
        </div>
    )

}

export default LoginPage;