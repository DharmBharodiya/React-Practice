import { useNavigate } from "react-router-dom";

function Login({setIsLoggedIn}){
    const navigate = useNavigate()
    const handleLogin = () => {
        setIsLoggedIn(true);
        navigate("/contact")
    };

    return(
        <div>
            <h1>Login</h1>
            <button onClick={handleLogin}>Log In</button>
        </div>
    )
}

export default Login;