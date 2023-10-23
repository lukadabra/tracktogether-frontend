import { useState, useEffect } from 'react';

// types
import { Theme } from "../types/index";

export const ThemeProvider = () => {
    const [theme, setTheme] = useState({
        theme: localStorage.getItem('theme') as Theme || 'light'
    });

    const toggleTheme = () => {
        localStorage.setItem('theme', localStorage.getItem('theme') === 'light' ? 'dark' : 'light')
        setTheme({theme: theme.theme === 'light' ? 'dark' : 'light'})
    };

    useEffect(() => {
        document.documentElement.setAttribute('data-mode', theme.theme);
    },[theme])

    return { theme: theme.theme, toggleTheme };
}