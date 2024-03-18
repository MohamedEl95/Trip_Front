import React, { createContext, useContext, ReactNode, useMemo } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material';
import { useThemeToggle } from '../hooks/usetheme';

interface ThemeContextProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const { isDarkMode, toggleTheme } = useThemeToggle();

  const theme = useMemo(() => {
    return createTheme({
      palette: {
        primary: {
          main: '#E0A000',
          100: '#FFE39E',
          200: '#FFCC4C',
          300: '#FFB703',
        },
        secondary: {
          main: isDarkMode ? '#f8F9FC' : '#111722',
          100: isDarkMode ? '#f8F9FC' : '#111722',
          200: isDarkMode ? '#EAEEF5' : '#212A3B',
          300: isDarkMode ? '#D7DDEA' : '#364259',
        },
        success: {
          main: '#DDFBE0',
          100: '#c1f7cb',
          200: '#93eb9a',
          300: '#65df69',
        },
        info: {
          main: isDarkMode ? '#034A6D' : '#2e7ba1',
          800: isDarkMode ? '#000000' : '#ffffff',
          100: isDarkMode ? '#ffffff' : '#000000',
          500: isDarkMode ? '#292727' : '#ececec',
          300: '#ffffff',
        },
        error: {
          main: '#FF0000',
          100: '#fda5a5',
          200: '#fa8888',
          300: '#f86b6b',
        },
      },
      components: {
        MuiTextField: {
          styleOverrides: {
            root: {
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: isDarkMode ? '#ffffff' : '#000000',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: isDarkMode ? '#ffffff' : '#000000',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: isDarkMode ? '#ffffff' : '#000000',
              },
            },
          },
        },
      },
    });
  }, [isDarkMode]);

  const contextValue = useMemo(() => {
    return {
      isDarkMode,
      toggleTheme,
    };
  }, [isDarkMode, toggleTheme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
