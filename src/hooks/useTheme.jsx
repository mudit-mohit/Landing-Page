import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the context
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    // 1. Initialize state
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            try {
                const stored = localStorage.getItem("site-theme");
                if (stored) return stored;
                return document.documentElement.classList.contains("light-mode") ? "light" : "dark";
            } catch {
                return "dark";
            }
        }
        return "dark";
    });

    // 2. Effect to apply theme to HTML tag
    useEffect(() => {
        const root = document.documentElement;
        if (theme === "light") {
            root.classList.add("light-mode");
            root.classList.remove("dark-mode");
        } else {
            root.classList.add("dark-mode");
            root.classList.remove("light-mode");
        }
        localStorage.setItem("site-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    const value = {
        theme,
        isLight: theme === 'light',
        toggleTheme,
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

// 3. Custom hook to use the context
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
