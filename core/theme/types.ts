import { ColorPalette } from "./colors";

export type ThemeType = "light" | "dark" | "system";

export interface Theme {
  colors: ColorPalette;
  isDark: boolean;
}

export interface ThemeContextType {
  theme: Theme;
  themeType: ThemeType;
  setThemeType: (type: ThemeType) => void;
}
