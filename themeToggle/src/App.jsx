import React from 'react';
import { ThemeProvider, useTheme } from './ThemeContext';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded ${theme === 'light' ? 'bg-gray-200 text-black' : 'bg-gray-800 text-white'}`}
    >
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
    </button>
  );
};

function App() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen ${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'}`}>
      <h1 className="text-center text-2xl">Theme Toggle App</h1>
      <div className="flex justify-center mt-4">
        <ThemeToggleButton />
      </div>
    </div>
  );
}

export default function RootApp() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}