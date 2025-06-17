import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));

        if(storedUser){
            setUser(storedUser)
        }
    }, [])

    const login = (email, password) => {
        // we first tried getting the users from the localstorage if there were some initially, otherwise we start from a new array
        const users = JSON.parse(localStorage.getItem("users")) || [];

        // from the users obtained, we try to match them with the passed credentials
        const matched = users.find((user) => user.email === email && user.password === password);
        if(matched){
            // if match is found, the current logged user is set to that user
            localStorage.setItem("loggedInUser", JSON.stringify({email}));
            setUser({email});
            return true; // this tells the calling method that the user is logged in
        }

    }

    const signup = (email, password) => {
        //first we try seeing if the user already exists or not, if yes then it is retrived from the localstorage, and if not then we start with a new array
        const users = JSON.parse(localStorage.getItem("users")) || [];
        
        // we now check if the user with same email already exists or not, if not then we process further otherwise we return false itself
        if(users.find((user) => user.email === email)) return false;

        //new user is created and pushed to the users array and set in localstorage
        const newUser = {email: email, password: password};
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        return true;//this means the registration was successfully
    }

    const logout = () => {
        localStorage.removeItem('loggedInUser');
        setUser(null)
    };

    return (
        <AuthContext.Provider value={{user, login, signup, logout}}>
            {children}
        </AuthContext.Provider>
    )

};
//this is a custom hook that we have created to access the context from accessing it anywhere in the app
export const useAuth = () => useContext(AuthContext);