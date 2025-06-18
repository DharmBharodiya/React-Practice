import React, {useEffect, useState} from "react";
import { createContext, useContext } from "react";  

const UserContext = createContext()

export const UserContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("currentInvoiceUser"))
        if(storedUser){
            setCurrentUser(storedUser)
        }
    }, [])

    const signup = (email, password) => {
        const users = JSON.parse(localStorage.getItem("invoiceUsers")) || []

        const exists = users.find((user) => user.email === email)

        if(exists) return false;

        const newUser = {email, password}

        users.push(newUser)
        localStorage.setItem("invoiceUsers", JSON.stringify(users))
        return true;
    }

    const login = (email, password) => {
        const users = JSON.parse(localStorage.getItem("invoiceUsers")) || []
        const validate = users.find((user) => user.email === email && user.password === password)

        if(validate) {
            const userData = {email}
            setCurrentUser(userData)
            localStorage.setItem("currentInvoiceUser", JSON.stringify(userData))
            return true
        }
        
        return false;
    }

    const logout = () => {
        setCurrentUser(null)
        localStorage.removeItem("currentInvoiceUser")
        return true
    }

    const value = {
        currentUser,
        login,
        signup,
        logout
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(UserContext)
    if (!context) {
        throw new Error('useAuth must be used within a UserContextProvider')
    }
    return context
}
