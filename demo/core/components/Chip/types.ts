import { PressableProps } from "react-native";
import { ThemeColor, ThemeSpacing } from "@joe111/neo-ui/theme";
export type ChipVariant = "solid" | "soft" | "outline" | "ghost";
export type ChipSize = "xs" | "sm" | "md" | "lg";

export interface ChipProps extends Omit<PressableProps, "style"> {
  // Content
  children?: React.ReactNode;
  label?: string;

  // Styling
  variant?: ChipVariant;
  size?: ChipSize;
  color?: ThemeColor;

  // Icons
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;

  // States
  disabled?: boolean;
  selected?: boolean;

  // Layout
  margin?: ThemeSpacing;

  // Actions
  onDelete?: () => void;
  deletable?: boolean;

  // Styling
  style?: PressableProps["style"];
  textStyle?: any;
}
