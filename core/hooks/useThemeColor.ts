import { useTheme } from "@/core/theme";
import { ColorPalette } from "@/core/theme/colors";

type ColorSchemeProps = {
  light?: string;
  dark?: string;
};

export function useThemeColor(
  props: ColorSchemeProps,
  colorName: keyof ColorPalette
) {
  const { theme } = useTheme();
  const colorFromProps = props[theme.isDark ? "dark" : "light"];

  return colorFromProps || theme.colors[colorName];
}
