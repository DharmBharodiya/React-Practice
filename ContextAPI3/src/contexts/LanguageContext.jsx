import React, {Children, createContext, useState} from "react";

export const LanguageContext = createContext();

const translations = {
    en: {
        header: "Welcome to the App",
        greeting: "Hello, User!",
        description: "This is a language switcher app."
    },
    es: {
        header: "Bienvenido a Mi Aplicación",
        greeting: "¡Hola, Usuario!",
        description: "Esta es una aplicación de cambio de idioma.",
      },
      fr: {
        header: "Bienvenue dans Mon Application",
        greeting: "Bonjour, Utilisateur !",
        description: "Ceci est une application de changement de langue.",
      },
}

export const LanguageProvider = ({children}) => {   
    const [language, setLanguage] = useState("en");

    const switchLanguage = (newLanguage) => {
        setLanguage((prev) => newLanguage)
    }

    const value = {
        language,
        switchLanguage,
        t: translations[language]
    };

    return(
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    )
}