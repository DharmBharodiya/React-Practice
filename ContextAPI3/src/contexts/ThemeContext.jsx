import React, {createContext, useState} from "react";

export const ThemeContext = createContext();

// here children repesents any components nested inside <ThemeProvider>
export const ThemeProvider = ({children}) => {

    const [themeType, setThemeType] = useState("light");
    const toggleTheme = () => {setThemeType((prev) => (prev === 'light' ? 'dark' : 'light'))}
    const contextValue = {themeType, toggleTheme};

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    )

}