"use strict";

import React, { createContext, useContext, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import { darkColors, lightColors } from "./colors.js";
import { spacing } from "./spacing.js";
import { jsx as _jsx } from "react/jsx-runtime";
const ThemeContext = /*#__PURE__*/createContext(undefined);
export const ThemeProvider = ({
  children
}) => {
  const colorScheme = useColorScheme();
  const [themeType, setThemeType] = useState('system');

  // Determine if we should use dark mode based on themeType and system preference
  const isDark = themeType === 'system' ? colorScheme === 'dark' : themeType === 'dark';

  // Determine colors based on theme
  const colors = isDark ? darkColors : lightColors;

  // Create the theme object (for backward compatibility)
  const theme = {
    colors,
    isDark
  };

  // Store theme type in AsyncStorage (optional - implement if needed)
  useEffect(() => {
    // You can add persistence logic here if needed
  }, [themeType]);
  return /*#__PURE__*/_jsx(ThemeContext.Provider, {
    value: {
      theme,
      colors,
      spacing,
      isDark,
      themeType,
      setThemeType
    },
    children: children
  });
};

// Custom hook to use the theme
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
//# sourceMappingURL=ThemeProvider.js.map