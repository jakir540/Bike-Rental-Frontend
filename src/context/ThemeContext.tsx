import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of the context
interface ThemeContextType {
  darkMode: boolean;
  toggleTheme: () => void;
}

// Define the default value
const defaultThemeContextValue: ThemeContextType = {
  darkMode: false,
  toggleTheme: () => {},
};

const ThemeContext = createContext<ThemeContextType>(defaultThemeContextValue);

// Custom Provider Component
interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom Hook
export const useTheme = () => useContext(ThemeContext);
