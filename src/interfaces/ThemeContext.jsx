'use client'

import React from "react";
import { useTheme } from "@wits/next-themes";
import { useState, useEffect } from "react";

export const ThemeContext = React.createContext();

export function ThemeProvider({ children }) {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [ currentTheme, setCurrentTheme ] = useState('light');

    useEffect(() => {
        if (theme === 'dark' || theme === 'light') {
            setCurrentTheme(theme);
        } else if (resolvedTheme) {
            setCurrentTheme(resolvedTheme);
        }
    }, [theme, resolvedTheme]);

    return (
        <ThemeContext.Provider value={{ currentTheme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}