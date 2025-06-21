import { ColorPalette } from './colors';
import { spacing } from './spacing';
export type ThemeType = 'light' | 'dark' | 'system';
export type ThemeColor = keyof ColorPalette;
export type ThemeSpacing = keyof typeof spacing;
export interface Theme {
    colors: ColorPalette;
    isDark: boolean;
}
export interface ThemeContextType {
    theme: Theme;
    colors: ColorPalette;
    spacing: typeof spacing;
    isDark: boolean;
    themeType: ThemeType;
    setThemeType: (type: ThemeType) => void;
}
//# sourceMappingURL=types.d.ts.map