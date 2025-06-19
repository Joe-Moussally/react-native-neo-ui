import { ColorPalette } from "./colors";
import { spacing } from "./spacing";

export type ThemeType = "light" | "dark" | "system";

// Color type based on the available colors in the theme
export type ThemeColor = keyof ColorPalette;

// Spacing type based on the available spacing values
export type ThemeSpacing = keyof typeof spacing;

export interface Theme {
  colors: ColorPalette;
  isDark: boolean;
}

export interface ThemeContextType {
  theme: Theme;
  themeType: ThemeType;
  setThemeType: (type: ThemeType) => void;
}
