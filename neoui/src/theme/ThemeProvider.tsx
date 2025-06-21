import React, { createContext, useContext, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import { darkColors, lightColors } from './colors';
import { spacing } from './spacing';
import { Theme, ThemeContextType, ThemeType } from './types';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const colorScheme = useColorScheme();
  const [themeType, setThemeType] = useState<ThemeType>('system');

  // Determine if we should use dark mode based on themeType and system preference
  const isDark =
    themeType === 'system' ? colorScheme === 'dark' : themeType === 'dark';

  // Determine colors based on theme
  const colors = isDark ? darkColors : lightColors;

  // Create the theme object (for backward compatibility)
  const theme: Theme = {
    colors,
    isDark,
  };

  // Store theme type in AsyncStorage (optional - implement if needed)
  useEffect(() => {
    // You can add persistence logic here if needed
  }, [themeType]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        colors,
        spacing,
        isDark,
        themeType,
        setThemeType,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};
