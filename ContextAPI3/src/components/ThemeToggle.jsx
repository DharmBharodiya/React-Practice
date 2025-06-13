import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function ThemeToggle() {
    const {themeType, toggleTheme} = useContext(ThemeContext);

    return (
        <div>
            <button onClick={toggleTheme}>
                Switch to {themeType === 'light' ? "Dark" : 'Light'} Theme
            </button>
        </div>
    )
}

export default ThemeToggle;