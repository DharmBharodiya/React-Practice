import { useContext, createContext, useState, useEffect } from 'react';

const UserContext = createContext();

function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("currentUser"));
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

    const login = (email, password) => {
        const users = JSON.parse(localStorage.getItem("newusers")) || [];
        const success = users.find((user) => user.email === email && user.password === password);
        if(success) {
            setUser({ email });
            localStorage.setItem("currentUser", JSON.stringify({ email }));
            return true;
        } else {
            return false;
        }
    }

    const signup = (email, password) => {
        const users = JSON.parse(localStorage.getItem("newusers")) || [];
        const userExists = users.find((user) => user.email === email);
        if(userExists) return false;
        
        const newUser = { email, password };
        users.push(newUser);
        localStorage.setItem("newusers", JSON.stringify(users));
        return true;
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem("currentUser");
        return true;
    }

    return (
        <UserContext.Provider value={{ user, login, signup, logout }}>
            {children}
        </UserContext.Provider>
    );
}

const useAuth = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useAuth must be used within a UserContextProvider');
    }
    return context;
}

export { UserContext, UserContextProvider, useAuth };