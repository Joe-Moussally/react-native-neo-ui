import { ThemeColor, ThemeSpacing } from "../../theme/types";
import { ViewProps } from "react-native";

export type BoxVariant =
  | "solid"
  | "soft"
  | "outline"
  | "transparent"
  | "filledOutline";

export interface BoxProps extends Omit<ViewProps, "style"> {
  children?: React.ReactNode;
  color?: ThemeColor;
  variant?: BoxVariant;
  margin?: ThemeSpacing;
  padding?: ThemeSpacing;
  gap?: ThemeSpacing;
  flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
  flex?: number;
  borderRadius?: number;
  style?: ViewProps["style"];
}
